import React from "react";
import Layout from "Components/Layout";
import ContactHero from "@/components/ContactHero/ContactHero";
import ContactUs from "Components/ContactUs/ContactUs";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const Contact = () => {
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
