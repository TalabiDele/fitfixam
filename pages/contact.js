import React from "react";
import Layout from "Components/Layout";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactUs from "Components/ContactUs/ContactUs";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const Contact = ({ post }) => {
  return (
    <Layout>
      <ContactHero />
      <ContactUs />
    </Layout>
  );
};

export default Contact;

export async function getServerSideProps({ query: { slug }, req }) {
  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  return {
    props: { post },
  };
}
