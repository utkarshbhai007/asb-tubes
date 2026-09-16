import Link from "next/link";
import { redirect } from "next/navigation";
import BlogPostForm from "../../../../components/admin/BlogPostForm";
import { isAdminAuthenticated } from "../../../../lib/adminAuth";

export const metadata = {
  title: "Add Blog Post",
};

export default async function NewBlogPostPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <>
      <div className="admin-toolbar">
        <div>
          <h1>Add blog post</h1>
          <p>Basic information and SEO metadata for your article.</p>
        </div>
        <Link href="/admin" className="btn-secondary">
          Back to Blog
        </Link>
      </div>
      <BlogPostForm mode="create" />
    </>
  );
}
