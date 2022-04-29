import Layout from "@/components/Layout";
import Hero from "@/components/AboutHero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";

const about = () => {
  return (
    <Layout title="About Fitfixam">
      <Hero />
      <AboutUs />
    </Layout>
  );
};

export default about;
