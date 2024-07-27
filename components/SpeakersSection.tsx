import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import ExpandableCard from "./ExpandableCard";

const speakers = [
  {
    name: "CHAU VU",
    title: "Co-Founder of Techcare Coaching",
    image: "/speakers/ChauVu.PNG",
    description: "Detailed information about Chau Vu.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "DUC PHAM",
    title: "CEO of Wonder Rates",
    image: "/speakers/DucPham.JPG",
    description: "Detailed information about Duc Pham.",
    twitter: "#",
    linkedin: "#",
  }
  // Add more speakers as needed
];

const SpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<{
    name: string;
    title: string;
    image: string;
    description: string;
    twitter: string;
    linkedin: string;
  } | null>(null);

  const handleClose = () => {
    setSelectedSpeaker(null);
  };

  return (
    <div id="speakers" className="w-full max-w-6xl mx-auto p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black">Speakers</h2>
      <p className="text-center text-black mt-4">
        We are bringing you the perfect combination of content and experience to ignite your heart, equip your mind, and spark your skill.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedSpeaker && (
          <ExpandableCard speaker={selectedSpeaker} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpeakersSection;
