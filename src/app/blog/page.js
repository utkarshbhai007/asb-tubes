import BlogListing from "../../components/BlogListing";
import { getAllPosts } from "../../lib/blogStore";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return <BlogListing posts={posts} />;
}
