import React from "react";
import UserLayout from "@/components/UserLayout";
import Electrician from "@/components/AllArtisans/Electrician";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const electricians = ({ allElectricians }) => {
  return (
    <UserLayout>
      <Electrician allElectricians={allElectricians} />
    </UserLayout>
  );
};

export default electricians;

export async function getServerSideProps() {
  const resElectricians = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/3`
  );
  const allElectricians = await resElectricians.json();

  return {
    props: { allElectricians },
  };
}
