import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "Components/HeroSection/Hero";
import Review from "Components/ReviewSection/Review";
import Action from "Components/Action/Action";
import Subscribe from "Components/Subscribe/Subscribe";
import SecondAction from "Components/Action/SecondAction";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

export default function Home({ post }) {
  return (
    <div>
      <Layout>
        <Hero />
        <Review />
        <Action />
        <Subscribe />
        <SecondAction />
      </Layout>
    </div>
  );
}

// Tasks

// 9 Add user location
// Create mobile responsiveness
// Display the image of each post
// Create like functionality

export async function getServerSideProps({ query: { slug }, req }) {
  const resPost = await fetch(`${NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const post = await resPost.json();

  return {
    props: { post },
  };
}
