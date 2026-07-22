import Nav from "./components/Nav";
import Hero from "./components/Hero";
import StatementStrip from "./components/StatementStrip";
import About from "./components/About";
import Divisions from "./components/Divisions";
import Framework from "./components/Framework";
import Masterclass from "./components/Masterclass";
import Testimonials from "./components/Testimonials";
import Audience from "./components/Audience";
import Manifesto from "./components/Manifesto";
import Founder from "./components/Founder";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import OriginPopup from "./components/OriginPopup";
import ElevationPopup from "./components/ElevationPopup";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatementStrip />
        <About />
        <Divisions />
        <Framework />
        <Masterclass />
        <Testimonials />
        <Audience />
        <Manifesto />
        <Founder />
        <CTA />
      </main>
      <Footer />
      <OriginPopup />
      <ElevationPopup />
    </>
  );
}
