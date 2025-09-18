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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Future Mode Technology - Educational Excellence | Leading EdTech Solutions</title>
        <meta name="description" content="Empowering minds through innovative educational technology solutions. Discover our comprehensive programs in Software Development, AI, Cybersecurity, and more. Transform your career with industry-leading education." />
        <meta property="og:title" content="Future Mode Technology - Educational Excellence" />
        <meta property="og:description" content="Leading the revolution in educational technology with innovative solutions that transform learning experiences" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futuremodetech.com" />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Programs />
      <WhatWeOffer />
      <Gallery />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}
