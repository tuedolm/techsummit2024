import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useInViewAnimation from "@/hooks/useInViewAnimation"; // Update the import path as needed

const experiences = [
  {
    title: "Company Tour",
    description: "Company Tour Section text",
    image: "/experiences/companytour-photo.jpg",
  },
  {
    title: "Panel Discussion",
    description: "Panel Discussion Section text",
    image: "/experiences/panelist-photo.jpg",
  },
  {
    title: "Workshops",
    description: "Workshops Section text",
    image: "/experiences/workshop-photo.jpg",
  },
  {
    title: "Meet and Network",
    description: "Meet and Network Section text",
    image: "/experiences/networking-photo.jpg",
  },
];

const ExperienceSection: React.FC = () => {
  const { ref, animation } = useInViewAnimation();

  return (
    <div className="w-full bg-blue-700 py-16">
      <div id="experience" ref={ref} className="w-full max-w-6xl mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={animation}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center text-white"
        >
          Exclusive on-site experiences:
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={animation}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">{experience.title}</h3>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
