import React from "react";
import { Container } from "./style";
import Link from "next/link";
import Image from "next/image";

const Blogging = ({ blogPosts }) => {
  console.log(blogPosts);
  return (
    <Container>
      <div className="container">
        <div className="header">
          <h1>Feautured Articles</h1>
          <Link href="/blog">
            <a className="blog-link">All Articles {">>"}</a>
          </Link>
        </div>

        <div className="wrapper">
          {blogPosts.map((e) => (
            <div className="card" key={e.id}>
              <div className="image">
                <Image
                  src={e.image.url}
                  alt={e.image.name}
                  width={400}
                  height={500}
                  objectFit="cover"
                  className="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blogging;
