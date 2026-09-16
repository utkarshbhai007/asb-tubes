import BlogListing from "../../components/BlogListing";
import { getAllPosts } from "../../lib/blogStore";

export const dynamic = "force-dynamic";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogListing posts={posts} />;
}
