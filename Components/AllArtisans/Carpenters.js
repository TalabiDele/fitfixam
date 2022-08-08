import React from "react";
import { Container } from "./style";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const Carpenters = ({ allCarpenters }) => {
  const router = useRouter();

  const handlePush = (e) => {
    router.push(`/profile/${e.slug}`);
  };

  return (
    <Container>
      <div className="container">
        <h1>Carpenters</h1>
        <div className="all">
          {allCarpenters.users_permissions_users.map((e) => (
            <div className="card" key={e.id} onClick={() => handlePush(e)}>
              <div className="img">
                <div className="image">
                  {e.user_image ? (
                    <Image
                      src={e.user_image.url}
                      alt="user image"
                      height={118.21}
                      width={118.21}
                      objectFit="cover"
                      className="user-img"
                    />
                  ) : (
                    <Image
                      src={userImage}
                      alt="user image"
                      height={118.21}
                      width={118.21}
                      objectFit="cover"
                      className="user-img"
                    />
                  )}
                </div>
              </div>
              <h2>{e.username}</h2>
              <p className="category">{e.category}</p>
              {e.address && (
                <div className="address">
                  <FaMapMarkerAlt />
                  <p>{e.address}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Carpenters;
