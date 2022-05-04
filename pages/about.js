import Layout from "@/components/Layout";
import Hero from "@/components/AboutHero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const about = ({ post }) => {
  return (
    <Layout title="About Fitfixam">
      <Hero />
      <AboutUs />
    </Layout>
  );
};

export default about;

export async function getServerSideProps({ query: { slug }, req }) {
  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  return {
    props: { post },
  };
}
