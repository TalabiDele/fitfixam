import UserLayout from "@/components/UserLayout";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import Posts from "@/components/Discussion/Posts";

const Trending = ({ post, posts, comments, likes }) => {
  return (
    <UserLayout
      title="Fitfixam | Trending"
      keywords="Artisans
    Repair
    Fix
    Carpenters
    Plumbers 
    Electricians 
    Reviews 
    Good 
    Bad 
    Services 
    Satisfied 
    Craftsmen
    Experience
    "
    >
      {posts.length !== 0 ? (
        <div>
          {posts.map((e) => (
            <Posts key={e.id} posts={e} comments={comments} />
          ))}
        </div>
      ) : (
        <div>No discussion available</div>
      )}
    </UserLayout>
  );
};

export default Trending;

export async function getServerSideProps({ query: { slug }, req }) {
  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?comments_gte=3`);
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resLikes = await fetch(`${NEXT_PUBLIC_API_URL}/likes`);
  const likes = await resLikes.json();

  return {
    props: { post, posts, comments, likes },
  };
}
