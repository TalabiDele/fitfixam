import UserLayout from "@/components/UserLayout";
import { NEXT_PUBLIC_API_URL } from "../config";
import Posts from "@/components/Discussion/Posts";
import Slug from "./feeds/[slug].js";
import styled from "styled-components";
import Icon from "@/components/Icon/Icon";

const Feeds = ({ posts, comments, userPost, allUsers }) => {
  return (
    <UserLayout>
      {posts.length !== 0 ? (
        <div>
          <Icon />
          <Container>
            {posts.map((e) => (
              <Posts
                key={e.id}
                posts={e}
                comments={comments}
                userPost={userPost}
              />
            ))}
          </Container>
        </div>
      ) : (
        <Div>
          <h2>No discussion available</h2>
        </Div>
      )}
    </UserLayout>
  );
};

export default Feeds;

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts?_sort=created_at:DESC`);
  const posts = await res.json();

  const resComments = await fetch(`${NEXT_PUBLIC_API_URL}/comments`);
  const comments = await resComments.json();

  const resAllUsers = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const allUsers = await resAllUsers.json();

  return {
    props: { posts, comments, allUsers },
  };
}

export const Div = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

export const Container = styled.div`
  margin-top: 4rem;
`;
