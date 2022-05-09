import UserLayout from "@/components/UserLayout";
import FindArtisans from "@/components/FindArtisan/FindArtisans";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const FindArtisan = ({ users }) => {
  console.log(users);

  return (
    <UserLayout>
      {users.map((user) => (
        <FindArtisans key={user.id} user={user} />
      ))}
    </UserLayout>
  );
};

export default FindArtisan;

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/users`);
  const users = await res.json();

  return {
    props: { users },
  };
}
