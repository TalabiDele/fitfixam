import { getSession, signIn, signOut } from "next-auth/react";
import ForgotPassword from "../Components/Account/ForgotPassword";
import Layout from "@/components/Layout";

const Login = () => {
  return (
    <Layout>
      <ForgotPassword />
    </Layout>
  );
};

export default Login;
