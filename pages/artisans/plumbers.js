import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import dynamic from "next/dynamic";

const Plumbers = ({ allPlumbers }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Plumber = dynamic(() => import("@/components/AllArtisans/Plumber"));

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
