import React from "react";
import UserLayout from "@/components/UserLayout";
import Plumber from "@/components/AllArtisans/Plumber";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const plumbers = ({ allPlumbers }) => {
  return (
    <UserLayout>
      <Plumber allPlumbers={allPlumbers} />
    </UserLayout>
  );
};

export default plumbers;

export async function getServerSideProps() {
  const resPlumbers = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/2?_limit=5`
  );
  const allPlumbers = await resPlumbers.json();

  return {
    props: { allPlumbers },
  };
}
