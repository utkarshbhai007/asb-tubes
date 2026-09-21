import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";
import { put } from "@vercel/blob";
import { isAdminAuthenticated } from "../../../../lib/adminAuth";

export const runtime = "nodejs";

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const MAX_BYTES = 5 * 1024 * 1024; // 5MB

export async function POST(request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Only JPG, PNG, WEBP, or GIF images are allowed" },
        { status: 400 }
      );
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: "Image must be 5MB or smaller" },
        { status: 400 }
      );
    }

    const ext =
      file.type === "image/jpeg"
        ? "jpg"
        : file.type === "image/png"
          ? "png"
          : file.type === "image/webp"
            ? "webp"
            : "gif";

    const filename = `${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;

    // 1. Use Vercel Blob if configured (native 100% free cloud storage on Vercel)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`blog/${filename}`, file, {
        access: "public",
      });
      return NextResponse.json({ url: blob.url });
    }

    // 2. If running on Vercel and token is missing, warn the user clearly
    if (process.env.VERCEL) {
      return NextResponse.json(
        {
          error:
            "Vercel Blob is not connected. Please enable Blob in your Vercel Dashboard (Storage -> Create Blob) to allow image uploads.",
        },
        { status: 500 }
      );
    }

    // 3. Local development fallback (writes to public/uploads/blog)
    const uploadDir = path.join(process.cwd(), "public", "uploads", "blog");
    fs.mkdirSync(uploadDir, { recursive: true });

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(path.join(uploadDir, filename), buffer);

    const url = `/uploads/blog/${filename}`;
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: error?.message || "Upload failed" },
      { status: 500 }
    );
  }
}
