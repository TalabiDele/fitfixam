import React from "react";
import UserLayout from "@/components/UserLayout";
import SearchItem from "@/components/Search/SearchItem";
import qs from "qs";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { Container } from "@/components/SearchStyle";
import { useRouter } from "next/router";

const Search = ({ posts, query }) => {
  console.log(posts);
  const router = useRouter();

  return (
    <UserLayout>
      <Container>
        <h1>You searched for {router.query.term}</h1>
        <div className="results">
          <h2>Results</h2>
          <div className="btns">
            <p>Sort Order</p>
            <button>Recent</button>
            <button>Popular</button>
          </div>
        </div>
        <SearchItem key={posts.id} posts={posts} />
      </Container>
    </UserLayout>
  );
};

export default Search;

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ post_contains: term }],
    },
  });

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?${query}`);
  const posts = await res.json();

  return {
    props: { posts, query },
  };
}
