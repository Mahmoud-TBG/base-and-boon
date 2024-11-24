import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import NewsSection from "@/components/NewsSection/NewsSection";
import PolishedPerfection from "@/components/PolishedPerfection/PolishedPerfection";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import StudioSection from "@/components/Studio/StudioSection";
import Summary from "@/components/Summary/Summary";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <PolishedPerfection />
      <Summary />
      <About />
      <ServiceSection />
      <StudioSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
