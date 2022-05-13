import Link from "next/link";
import { Container, Wrapper, Card } from "./style";
import Image from "next/image";
import userImage from "@/public/userImage.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const FindArtisans = ({ user, category }) => {
  // user.artisan ? console.log(user) : console.log("not an artisan");

  const router = useRouter();

  const getArtisanProfile = () => {
    router.push(`/profile/${user.slug}`);
  };

  return user.artisan ? (
    <Container>
      <Wrapper>
        <Card onClick={getArtisanProfile}>
          <div className="img">
            <div className="image">
              {user.user_image ? (
                <Image
                  src={user.user_image.url}
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
          <h2>{user.username}</h2>
          <p className="category">{category}</p>
          {user.address && (
            <div className="address">
              <FaMapMarkerAlt />
              <p>{user.address}</p>
            </div>
          )}
        </Card>
      </Wrapper>
    </Container>
  ) : (
    <div></div>
  );
};

export default FindArtisans;
