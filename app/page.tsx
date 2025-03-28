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
import TicketSection from "@/components/TicketSection";
import RecapSection from "@/components/RecapSection";
import SpeedMentorsSection from "@/components/SpeedMentorsSection";

export default function AppPage() {
  return (
    <div id="home" className="w-full bg-neutral-50 relative antialiased">
      <Navbar />
      <Hero />
      <AboutSection />
      <RecapSection />
      <ExperienceSection /> 
      <AgendaSection />
      <SpeakersSection />
      <SpeedMentorsSection />
      <SponsoringSection />
      <TicketSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
