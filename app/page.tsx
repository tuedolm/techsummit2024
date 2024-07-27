"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import ExperienceSection from "@/components/ExperienceSection";
import SponsoringSection from "@/components/SponsorSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
export default function AppPage() {
  return (
    <div id="home" className="w-full bg-neutral-50 relative antialiased">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ExperienceSection /> 
        <AgendaSection />
        <SpeakersSection />
        <SponsoringSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
