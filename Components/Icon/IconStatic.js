import React from "react";
import { Container } from "./Style";
import Image from "next/image";
import icon from "/public/home.png";

const Icon = () => {
  return (
    <Container>
      <div className="img">
        <Image
          src={icon}
          alt="icons"
          width="20px"
          height="800px"
          objectFit="contain"
        />
      </div>
      <h2>Feed</h2>
    </Container>
  );
};

export default Icon;
