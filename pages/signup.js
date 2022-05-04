import CreateAccount from "../Components/Account/CreateAccount";
import Layout from "@/components/Layout";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const signup = ({ post }) => {
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

  return {
    props: { post },
  };
}
