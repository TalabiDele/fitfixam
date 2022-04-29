import UserLayout from "@/components/UserLayout";
import { NEXT_PUBLIC_API_URL } from "../config";
import Posts from "@/components/Discussion/Posts";
import Slug from "./feeds/[slug].js";

const Feeds = ({ posts, comments, userPost, allUsers }) => {
  console.log(allUsers);

  return (
    <UserLayout>
      <div>
        {posts.map((e) => (
          <Posts key={e.id} posts={e} comments={comments} userPost={userPost} />
        ))}
      </div>
      {/* <Slug /> */}
    </UserLayout>
  );
};

export default Feeds;

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`);
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resAllUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resAllUsers.json();

  return {
    props: { posts, comments, allUsers },
  };
}
