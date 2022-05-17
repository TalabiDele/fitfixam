import { createContext, useState, useEffect } from "react";
import { NEXT_PUBLIC_URL, NEXT_PUBLIC_API_URL } from "@/config/index";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import axios from "axios";
import { getSession, useSession } from "next-auth/react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [allUsers, setAllUsers] = useState(null);

  const { data: session } = useSession();

  console.log(session);
  console.log(process.env.NEXTAUTH_URL);

  const router = useRouter();

  useEffect(() => {
    checkUserLoggedIn();
    router.prefetch("/feeds");
  }, []);

  // Register
  const register = async (user) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setIsLoading(true);
    const data = await res.json();

    if (res.ok) {
      setIsLoading(true);
      setUser(data.user);
      console.log(user);
      router.push("/feeds");
    } else {
      setError(data.message);
      setError(null);
    }

    setIsLoading(false);
  };

  // Login
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await res.json();

    // console.log(data);

    if (res.ok) {
      setUser(data.user);
      router.push("/feeds");
    } else {
      setErrorMessage(data.message);
      setError(true);
    }
  };

  // Logout
  const logout = async () => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/logout`, {
      method: "POST",
    });

    if (res.ok) {
      setUser(null);
      router.push("/login");
    }
  };

  // Get all users
  const getUsers = async () => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
    const data = await res.json();

    if (res.ok) {
      setAllUsers(data.res);
    } else {
      setAllUsers(null);
    }
  };

  // Provider authentication
  const userProvider = async () => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/auth/[...nextauth]`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  // Check user logged in
  const checkUserLoggedIn = async (user) => {
    const res = await fetch(`${NEXT_PUBLIC_URL}/api/user`);
    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        errorMessage,
        register,
        login,
        logout,
        checkUserLoggedIn,
        isLoading,
        error,
        userProvider,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// export async function getServerSideProps() {

//   return {
//     props: {
//       allUsers,
//     },
//   };
// }
