import UserLayout from "@/components/UserLayout";
import FaqComponent from "@/components/Faq/FaqComponent";
import { NEXT_PUBLIC_API_URL } from "@/config/index";

const Faq = ({ artisanFaq, clientFaq, generalFaq }) => {
  return (
    <UserLayout>
      <FaqComponent
        artisanFaq={artisanFaq}
        clientFaq={clientFaq}
        generalFaq={generalFaq}
      />
    </UserLayout>
  );
};

export default Faq;

export async function getServerSideProps() {
  const resArtisans = await fetch(`${NEXT_PUBLIC_API_URL}/artisan-faqs`);
  const artisanFaq = await resArtisans.json();

  const resClient = await fetch(`${NEXT_PUBLIC_API_URL}/client-faqs`);
  const clientFaq = await resClient.json();

  const resGeneral = await fetch(`${NEXT_PUBLIC_API_URL}/general-faqs`);
  const generalFaq = await resGeneral.json();

  return {
    props: { artisanFaq, clientFaq, generalFaq },
  };
}
