import React, { useEffect, useContext } from "react";
import { Container, Wrapper } from "./Style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "@/context/AuthContext";

const SearchItem = ({ posts }) => {
  const router = useRouter();

  return (
    <Container>
      {posts.length === 0 ? (
        <p>Search not found, try again!</p>
      ) : (
        posts.map((e) => (
          <div className="container" key={e.id}>
            <Image
              src={e.user.user_image.url}
              alt="user image"
              width={61}
              height={61}
              objectFit="cover"
              className="image"
            />
            <h2>{e.user.username}</h2>
            {"-"}
            <p>{e.post.slice(0, 60).concat("...")}</p>
            <h3 onClick={() => router.push(`/feeds/${e.slug}`)}>Read more</h3>
          </div>
        ))
      )}

      <Wrapper></Wrapper>
    </Container>
  );
};

export default SearchItem;
