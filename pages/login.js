import { getSession, signIn, signOut } from "next-auth/react";
import Signin from "../Components/Account/Signin";
import Layout from "@/components/Layout";

const Login = () => {
  return (
    <Layout>
      <Signin />
    </Layout>
  );
};

export default Login;

// export const getServerSideProps = async ({ req }) => {
//   const session = await getSession({ req });
//   return {
//     props: {
//       session,
//     },
//   };
// };
