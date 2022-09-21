import Layout from "@/components/Layout";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

export default function Home({ posts, blogPosts }) {
  const Hero = dynamic(() => import("Components/HeroSection/Hero"));
  const Review = dynamic(() => import("Components/ReviewSection/Review"));
  const Action = dynamic(() => import("Components/Action/Action"));
  const Subscribe = dynamic(() => import("Components/Subscribe/Subscribe"));
  const SecondAction = dynamic(() => import("Components/Action/SecondAction"));
  const Conversation = dynamic(() =>
    import("@/components/Conversation/Conversation")
  );
  const Find = dynamic(() => import("@/components/Find/Find"));
  const Blogging = dynamic(() => import("@/components/BlogSection/Blogging"));

  return (
    <>
      <Layout
        title="Fitfixam | Home"
        description="Here, you can find reviews of artisans and companies that offer artisan services. Be girded with the information that will help you make the right decisions. Fix it one time"
        keywords="Artisans,
        Repair,
        Fix,
        Carpenters,
        Plumbers,
        Electricians,
        Reviews,
        Good,
        Bad, 
        Services,
        Satisfied,
        Craftsmen,
        Experience,
        Nigeria,
        "
      >
        <Hero />
        <Review />
        <Find />
        <Conversation posts={posts} />
        <Action />
        <Blogging blogPosts={blogPosts} />
        <Subscribe />
        <SecondAction />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const resPosts = await fetch(
    `${NEXT_PUBLIC_API_URL}/posts?comments_gte=3&_limit=4`
  );
  const posts = await resPosts.json();

  const resBlog = await fetch(`${NEXT_PUBLIC_API_URL}/blog-posts`);
  const blogPosts = await resBlog.json();

  return {
    props: { posts, blogPosts },
  };
}
