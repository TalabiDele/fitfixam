import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const electricians = ({ allElectricians }) => {
  const UserLayout = dynamic(() => import("@/components/UserLayout"));
  const Electrician = dynamic(() =>
    import("@/components/AllArtisans/Electrician")
  );

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
