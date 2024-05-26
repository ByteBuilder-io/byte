import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { BigText } from "@/components/bigText";
import { CategorySelector } from "@/components/categorySelector";
import { ContactBanner } from "@/components/contactBanner";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <BigText />
      <CategorySelector />
      <ContactBanner />
      <Footer />
    </div>
  );
}
