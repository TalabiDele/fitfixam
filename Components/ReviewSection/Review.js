import { Container, Wrapper, Arrow, Header } from "./Style";
import Image from "next/image";
// import Video from "@/public/Video.png";
import ArrowOne from "/public/Arrow-2.png";
import ReviewCard from "Components/ReviewCard/ReviewCard";
import ReactPlayer from "react-player";
// import "video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";
// import Video from "@/public/Animation.mp4";

const Review = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Header>Why we’re here</Header>
          <p>
            You, like many other Nigerians have most likely hired an artisan
            (carpenter, plumber, electrician, etc.) who after claiming to be
            proficient in his area of expertise,{" "}
            <strong>ended up disappinting</strong> you. In addition to being
            unprofessional, some of these artisans are completely dishonest.{" "}
            <br /> <br /> We believe there’s a way to avoid hiring unskilled and
            untrained craftsmen.
            <strong> By leaving a review on your experience</strong> with an
            artisan who either satisfied you or disappointed you, you help
            others know who to patronize and who to avoid completely
            (individuals or companies).
          </p>
        </div>
        <video autoPlay loop>
          <source
            src="https://res.cloudinary.com/ofundu/video/upload/v1652117729/Fitfixam_Video-1_2_zmiat1.mp4"
            type="video/mp4"
          />
        </video>
      </Wrapper>
      <Arrow>
        <Image
          src={ArrowOne}
          alt="Arrow Down"
          width={200}
          height={200}
          className="arrow_down"
          object-position="50% 50%"
        />
      </Arrow>
      <ReviewCard />
    </Container>
  );
};

export default Review;
