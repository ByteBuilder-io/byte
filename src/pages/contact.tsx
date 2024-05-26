import { Nav } from "@/components/nav";
import Footer from "@/components/footer";
import { HeroScreen } from "@/components/heroScreen";
import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroScreen />
      <ContactForm />
      <Footer />
    </div>
  );
}
