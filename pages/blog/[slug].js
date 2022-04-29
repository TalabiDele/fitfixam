import { NEXT_PUBLIC_API_URL } from "../../config";
import UserLayout from "@/components/UserLayout";
import SlugPosts from "@/components/BlogPosts/SlugPosts";

const Slug = ({ blogPosts, post, likes, comments }) => {
  return (
    <UserLayout>
      <SlugPosts
        blogPosts={blogPosts}
        post={post}
        like={likes}
        comments={comments}
      />
    </UserLayout>
  );
};

export default Slug;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/blog-posts?_sort=created_at:DESC`
  );
  const blogPosts = await res.json();

  const resSlug = await fetch(`${NEXT_PUBLIC_API_URL}/blog-posts?slug=${slug}`);
  const post = await resSlug.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/blog-likes`);
  const likes = await resLikes.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/blog-comments`);
  const comments = await resComments.json();

  return {
    props: { blogPosts, post, likes, comments },
  };
}
