import React from "react";
import Layout from "Components/Layout";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactUs from "Components/ContactUs/ContactUs";

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactUs />
    </Layout>
  );
};

export default Contact;
