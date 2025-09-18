import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import VisionMission from "@/components/VisionMission.jsx";
import Programs from "@/components/Programs.jsx";
import Gallery from "@/components/Gallery.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import Chatbot from "@/components/Chatbot.jsx";
import WhatWeOffer from "@/components/WhatWeOffer.jsx";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Future Mode Technology - Educational Technology Solutions</title>
        <meta name="description" content="Empowering minds through innovative educational technology solutions that shape tomorrow's leaders" />
        <meta name="keywords" content="education technology, robotics, programming, AI, future learning" />
        <meta property="og:title" content="Future Mode Technology - Educational Technology Solutions" />
        <meta property="og:description" content="Empowering minds through innovative educational technology solutions that shape tomorrow's leaders" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <VisionMission />
        <WhatWeOffer />
        <Programs />
        <Gallery />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}