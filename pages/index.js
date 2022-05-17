import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "Components/HeroSection/Hero";
import Review from "Components/ReviewSection/Review";
import Action from "Components/Action/Action";
import Subscribe from "Components/Subscribe/Subscribe";
import SecondAction from "Components/Action/SecondAction";

export default function Home() {
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
// Create like functionality
// Provider logins
// Icon on the feeds page
// Artisan reviews
