import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import BlogPostForm from "../../../../../components/admin/BlogPostForm";
import { isAdminAuthenticated } from "../../../../../lib/adminAuth";
import { getPostBySlug } from "../../../../../lib/blogStore";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `Edit ${slug}` };
}

export default async function EditBlogPostPage({ params }) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="admin-toolbar">
        <div>
          <h1>Edit blog post</h1>
          <p>
            Update content and SEO for <code>{post.slug}</code>
          </p>
        </div>
        <Link href="/admin" className="btn-secondary">
          Back to Blog
        </Link>
      </div>
      <BlogPostForm mode="edit" initialPost={post} />
    </>
  );
}
