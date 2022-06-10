import UserLayout from "@/components/UserLayout";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import { NEXT_PUBLIC_API_URL } from "../config";

const Blog = ({ blogPosts }) => {
  return (
    <UserLayout
      title="Fitfixam Blog"
      keywords="Repair Review Connect Blog Fitfixam"
      description="Blog articles for fitfixam"
    >
      <BlogPosts blogPosts={blogPosts} />
    </UserLayout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/blog-posts?_sort=created_at:DESC`
  );
  const blogPosts = await res.json();

  return {
    props: { blogPosts },
  };
}
