import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "Components/HeroSection/Hero";
import Review from "Components/ReviewSection/Review";
import Action from "Components/Action/Action";
import Subscribe from "Components/Subscribe/Subscribe";
import SecondAction from "Components/Action/SecondAction";
import Conversation from "@/components/Conversation/Conversation";
import Find from "@/components/Find/Find";
import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "@/public/spinner.gif";
import styled from "styled-components";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

export default function Home({ posts }) {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(true);
    // }, 5000);
    // // setIsLoading(true);
    // if (user) {
    //   setIsLoading(true);
    //   router.push("/feeds");
    // }
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
  }, []);

  return (
    <div>
      {/* {isLoading ? (
        <Loader className="loading">
          <Image width={50} height={50} alt="Spinner" src={Spinner} />
        </Loader>
      ) : ( */}
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
        <Subscribe />
        <SecondAction />
      </Layout>
      {/* )} */}
    </div>
  );
}

const Loader = styled.div`
  width: 100%;
  margin: 30rem 60rem;
  height: 100%;
`;

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?_limit=3`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
8;

// Tasks

// 9 Add user location
// Create like functionality
// Provider logins
// Icon on the feeds page
// Artisan reviews
