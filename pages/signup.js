import CreateAccount from "../Components/Account/CreateAccount";
import Layout from "@/components/Layout";

const signup = () => {
  return (
    <Layout>
      <CreateAccount />
    </Layout>
  );
};

export default signup;

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
