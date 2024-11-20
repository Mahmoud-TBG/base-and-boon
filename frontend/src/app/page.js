import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import PolishedPerfection from "@/components/PolishedPerfection/PolishedPerfection";
import Summary from "@/components/Summary/Summary";

export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <PolishedPerfection />
      <Summary />
      <About />
    </div>
  );
}
