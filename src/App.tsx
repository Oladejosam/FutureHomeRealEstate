import { useState } from "react";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Residences from "./components/Residences";

export default function App() {
  const [plan, setPlan] = useState("two");

  return (
    <div className="overflow-x-clip bg-cream-50 font-body text-navy-900">
      <Nav />
      <main>
        <Hero />
        <Residences />
        <Gallery />
        <Pricing plan={plan} setPlan={setPlan} />
        <Location />
        <Faq />
        <Contact plan={plan} setPlan={setPlan} />
      </main>
      <Footer />
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
