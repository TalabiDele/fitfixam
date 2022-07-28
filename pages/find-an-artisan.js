import UserLayout from "@/components/UserLayout";
import FindArtisans from "@/components/FindArtisan/FindArtisans";
import { NEXT_PUBLIC_API_URL } from "@/config/index";
import { useEffect, useState } from "react";
import Link from "next/link";

import styled from "styled-components";

const FindArtisan = ({ carpenters, plumbers }) => {
  // console.log(plumbers);

  const [isCarpenter, setIsCarpenter] = useState();
  const [isElectricians, setIsElectricians] = useState();

  useEffect(() => {
    getPlumbers();
    getElectricians();
  }, []);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const getPlumbers = async () => {
    // const res = await fetch(`${NEXT_PUBLIC_API_URL}/posts`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(postItem),
    // });
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/user-categories/1?_limit=5`
    );
    const json = await response.json();

    if (response.ok) {
      setIsCarpenter(json);
    }
    // console.log(isCarpenter);
  };

  const getElectricians = async () => {
    const response = await fetch(
      `${NEXT_PUBLIC_API_URL}/user-categories/3?_limit=5`
    );
    const json = await response.json();

    if (response.ok) {
      setIsElectricians(json);
    }
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "2rem auto",
  };

  return (
    <UserLayout
      title="Fitfixam | Find an Artisan"
      description="Connect with artisans."
      keywords="Artisans
      Repair
      Fix
      Carpenters
      Plumbers 
      Electricians 
      Reviews 
      Good 
      Bad 
      Services 
      Satisfied 
      Craftsmen
      Experience
      "
    >
      <>
        <Header>
          <h1>Carpenters</h1>
          {/* <Link href="/carpenter-artisans"><a>See all</a></Link> */}
        </Header>
        <Cards>
          {isCarpenter &&
            isCarpenter.users_permissions_users.map((carpenter) => (
              <div className="card" key={carpenter.id}>
                <FindArtisans
                  key={carpenter.id}
                  user={carpenter}
                  category={isCarpenter.category}
                />
              </div>
            ))}
        </Cards>
      </>
      <>
        <Header>
          <h1>Plumbers</h1>
          {/* <Link href="/plumber-artisans"><a>See all</a></Link> */}
        </Header>
        <Cards>
          {plumbers.users_permissions_users.map((plumber) => (
            <div className="card" key={plumber.id}>
              <FindArtisans
                key={plumber.id}
                user={plumber}
                category={plumbers.category}
              />
            </div>
          ))}
        </Cards>
      </>
      <>
        <Header>
          <h1>Electricians</h1>
          {/* <Link href="/electricians-artisans"><a>See all</a></Link> */}
        </Header>
        <Cards>
          {isElectricians &&
            isElectricians.users_permissions_users.map((electrician) => (
              <div className="card" key={electrician.id}>
                <FindArtisans
                  key={electrician.id}
                  user={electrician}
                  category={isElectricians.category}
                />
              </div>
            ))}
        </Cards>
      </>
    </UserLayout>
  );
};

export default FindArtisan;

export const Header = styled.div`
  @media (min-width: 1281px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 2rem auto;
    align-items: center;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    margin: 2rem auto;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 2rem auto;
    align-items: center;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    margin: 2rem auto;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    margin: 2rem auto;

    h1 {
      font-weight: 400;
    }

    a {
      text-decoration: underline;
    }
  }
`;

export const Cards = styled.div`
  @media (min-width: 1281px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 100%;

    div.card {
      width: 100%;
      margin-right: -10rem;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    width: 70%;
    gap: 5rem;
    margin: auto;

    div.card {
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    width: 70%;
    gap: 3rem;
    margin: auto;

    div.card {
      width: 100%;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 30%;
    gap: 1rem;
    margin: auto;

    div.card {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    width: 100%;
    gap: 1rem;
    margin: 0rem auto 0rem 5rem;

    div.card {
      width: 100%;
    }
  }
`;

export async function getServerSideProps() {
  const resCarpenters = await fetch(`${NEXT_PUBLIC_API_URL}/user-categories/1`);
  const carpenters = await resCarpenters.json();

  const resPlumbers = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/2?_limit=5`
  );
  const plumbers = await resPlumbers.json();

  const resElectricians = await fetch(
    `${NEXT_PUBLIC_API_URL}/user-categories/3`
  );
  const electricians = await resElectricians.json();

  return {
    props: { carpenters, plumbers },
  };
}
