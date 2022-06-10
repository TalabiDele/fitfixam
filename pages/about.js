import Layout from "@/components/Layout";
import Hero from "@/components/AboutHero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";

const about = () => {
  return (
    <Layout
      title="Fitfixam | About"
      description="Fitfixam is a platform for both artisans and people who use the services of artisans. We want to help you find the right artisans for your projects and ensure your satisfaction."
      keywords="Artisans, Repair, Fix, Reviews, Services, Satisfied
    "
    >
      <Hero />
      <AboutUs />
    </Layout>
  );
};

export default about;
