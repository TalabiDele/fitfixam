import React from "react";
import Carpenters from "@/components/AllArtisans/Carpenters";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import UserLayout from "@/components/userLayout";

const carpenters = ({ allCarpenters }) => {
  return (
    <UserLayout>
      <Carpenters allCarpenters={allCarpenters} />
    </UserLayout>
  );
};

export default carpenters;

export async function getServerSideProps() {
  const resCarpenters = await fetch(`${NEXT_PUBLIC_API_URL}/user-categories/1`);
  const allCarpenters = await resCarpenters.json();

  return {
    props: { allCarpenters },
  };
}
