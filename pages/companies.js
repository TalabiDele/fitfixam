import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import UserLayout from "@/components/UserLayout";
import CompaniesPage from "@/components/Companies/CompaniesPage";

const Companies = ({ companies }) => {
  return (
    <UserLayout>
      <CompaniesPage companies={companies} />
    </UserLayout>
  );
};

export default Companies;

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/companies`);
  const companies = await res.json();

  return {
    props: { companies },
  };
}
