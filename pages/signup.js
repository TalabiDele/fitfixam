import dynamic from "next/dynamic";

const signup = () => {
  const Layout = dynamic(() => import("@/components/Layout"));
  const CreateAccount = dynamic(() =>
    import("../Components/Account/CreateAccount")
  );

  return (
    <Layout
      title="Fitfixam | Sign up"
      description="Get started with Fitfixam today. Sign up for free!"
      keywords=""
    >
      <CreateAccount />
    </Layout>
  );
};

export default signup;
