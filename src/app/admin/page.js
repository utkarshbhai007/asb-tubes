import { redirect } from "next/navigation";
import AdminPostsTable from "../../components/admin/AdminPostsTable";
import { isAdminAuthenticated } from "../../lib/adminAuth";
import { getAllPosts } from "../../lib/blogStore";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog Admin",
};

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const posts = await getAllPosts();
  return <AdminPostsTable posts={posts} />;
}
