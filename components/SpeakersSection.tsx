import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import ExpandableCard from "./ExpandableCard";
import useInViewAnimation from "@/hooks/useInViewAnimation"; // Update the import path as needed

const speakers = [
  {
    name: "HUNG HOANG NGUYEN",
    title: "CTO at Viettel AI",
    image: "/speakers/hungnguyen-photo.jpeg",
    description: "Detailed information about Hung Hoang Nguyen.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "CHAU VU",
    title: "Co-Founder of Techcare Coaching",
    image: "/speakers/chauvu-photo.png",
    description: "Ms. Chau Vu - Co-founder of TechCare Coaching, with 10 years of industry experience as a software engineer. She has a passion for helping computer science students and software engineers explore suitable career paths, develop a growth mindset, and navigate workplace conflicts in the tech industry.\n\nChau is also an active member of the Viet Tech and Viet Referral admin group, where she promotes knowledge sharing among Vietnamese tech professionals and advocates for more diversity in the tech industry.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "DUC PHAM",
    title: "CEO of Wonder Rates",
    image: "/speakers/ducpham-photo.jpg",
    description: "Duc Pham began his journey as a Senior Software Engineer, accumulating over 15 years of experience at major companies like Ericsson and Box. He then pivoted to the startup world, focusing on mortgage and real estate, achieving remarkable success with 200% growth, originating thousands of loans with over $1B in funding.\n\nWith a deep understanding of the pros and cons of both corporate and startup environments, Mr. Pham will share his transparent and valuable insights in his workshop.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "HUNG DOAN",
    title: "Staff Software Engineer at Databricks",
    image: "/speakers/hungdoan-photo.jpg",
    description: "Detailed information about Hung Doan.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "SUNNY HIEN NGUYEN",
    title: "Product Lead at Twelve Labs",
    image: "/speakers/sunny-photo.jpeg",
    description: "Detailed information about Sunny Hien Nguyen.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "MANH NGUYEN",
    title: "Staff ML & Robotics (Tech Lead) at Cruise",
    image: "/speakers/manhnguyen-photo.jpg",
    description: "Detailed information about Manh Nguyen.",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "TUAN DOAN",
    title: "Staff DS at Quora | Head of Growth POE",
    image: "/speakers/tuandoan-photo.jpg",
    description: "Detailed information about Tuan Doan.",
    twitter: "#",
    linkedin: "#",
  }
];

const SpeakersSection: React.FC = () => {
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

  const { ref, animation } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animation}
      transition={{ duration: 1 }}
      id="speakers"
      className="w-full max-w-6xl mx-auto p-8 md:p-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black">Speakers</h2>
      <p className="text-center text-black mt-4">
        We are bringing you the perfect combination of content and experience to ignite your heart, equip your mind, and spark your skill.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <SpeakerCard speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSpeaker && (
          <ExpandableCard speaker={selectedSpeaker} onClose={handleClose} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpeakersSection;
