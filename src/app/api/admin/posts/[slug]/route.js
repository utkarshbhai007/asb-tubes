import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdminAuthenticated } from "../../../../../lib/adminAuth";
import {
  deletePost,
  getPostBySlug,
  updatePost,
} from "../../../../../lib/blogStore";

export async function GET(_request, { params }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PUT(request, { params }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug } = await params;
    const body = await request.json();
    const post = updatePost(slug, body);
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath(`/blog/${post.slug}`);
    revalidatePath("/sitemap.xml");
    return NextResponse.json({ post });
  } catch (error) {
    const status = error.message === "Post not found" ? 404 : 400;
    return NextResponse.json(
      { error: error.message || "Could not update post" },
      { status }
    );
  }
}

export async function DELETE(_request, { params }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug } = await params;
    deletePost(slug);
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/sitemap.xml");
    return NextResponse.json({ ok: true });
  } catch (error) {
    const status = error.message === "Post not found" ? 404 : 400;
    return NextResponse.json(
      { error: error.message || "Could not delete post" },
      { status }
    );
  }
}
