import React from "react";
import { Container } from "./style";
import Image from "next/image";
import arrow from "@/public/Arrow-2.png";
import TrendingCards from "../TrendingCards/TrendingCards";

const Conversation = ({ posts }) => {
  return (
    <Container>
      <div className="container">
        <h1>
          <span className="blue">Join the Conversation! </span>
          <br />
          <span className="grey">Find an artisan,</span>{" "}
          <span className="dark">Make a post.</span>
        </h1>
        <p>
          Save time and money and help other do the same. Together, we can curb
          mediocre services, and promote competent services.
          <strong> See what others have said...</strong>
        </p>
        <div className="img">
          <Image
            src={arrow}
            alt="arrow"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
      </div>
      <TrendingCards posts={posts} />
    </Container>
  );
};

export default Conversation;
