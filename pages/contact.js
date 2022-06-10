import React from "react";
import Layout from "Components/Layout";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactUs from "Components/ContactUs/ContactUs";

const Contact = () => {
  return (
    <Layout
      title="Fitfixam | Contact us"
      description="Feel free to reach out to us and our support team will get right back to you
    "
    >
      <ContactHero />
      <ContactUs />
    </Layout>
  );
};

export default Contact;
