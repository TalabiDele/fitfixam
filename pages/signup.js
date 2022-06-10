import CreateAccount from "../Components/Account/CreateAccount";
import Layout from "@/components/Layout";

const signup = () => {
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
