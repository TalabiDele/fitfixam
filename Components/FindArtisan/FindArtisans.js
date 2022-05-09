import Link from "next/link";
import { Container, Wrapper, Card } from "./style";
import Image from "next/image";
import userImage from "@/public/userImage.png";

const FindArtisans = ({ user }) => {
  user.artisan ? console.log(user) : console.log("not an artisan");

  return user.artisan ? (
    <Container>
      <h1>Artisans</h1>
      <Wrapper>
        <Card>
          <div className="img">
            {user.user_image ? (
              <Image
                src={user.user_image.url}
                alt="user image"
                height={118.21}
                width={118.21}
                objectFit="contain"
              />
            ) : (
              <Image
                src={userImage}
                alt="user image"
                height={118.21}
                width={118.21}
                objectFit="contain"
              />
            )}
          </div>
          <h2>{user.username}</h2>
          <p>{user.address}</p>
        </Card>
      </Wrapper>
    </Container>
  ) : (
    <div></div>
  );
};

export default FindArtisans;
