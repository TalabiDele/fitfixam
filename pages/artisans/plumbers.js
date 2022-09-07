import React, { useState, useEffect } from "react";
import UserLayout from "@/components/UserLayout";
import Plumber from "@/components/AllArtisans/Plumber";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const Plumbers = ({ allPlumbers }) => {
  console.log(allPlumbers);

  return (
    <UserLayout>
      <Plumber allPlumbers={allPlumbers} />
    </UserLayout>
  );
};

export default Plumbers;

export async function getServerSideProps() {
  const resPlumbers = await fetch(
    `${NEXT_PUBLIC_API_URL}/users/?_user_category=2`
  );
  const allPlumbers = await resPlumbers.json();

  console.log(allPlumbers);

  return {
    props: { allPlumbers },
  };
}
