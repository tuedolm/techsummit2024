import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useInViewAnimation from "@/hooks/useInViewAnimation"; // Update the import path as needed

const experiences = [
  {
    title: "Company Tour",
    description: `Gain exclusive access to leading tech companies. Witness groundbreaking innovations firsthand and understand the dynamics that drive success in Silicon Valley.`,
    disclaimer: `*Disclaimer: Company tour is a complementary event to inspire Vietnamese students to pursue a career in Tech. Availability is on first come first serve basis`,
    image: "/experiences/companytour-photo.jpg",
  },
  {
    title: "Panel Discussion",
    description: "Join conversations with high-profile speakers from the U.S. and Vietnam tech industry. Gain insights into the latest technological trends, industry challenges, and future opportunities.",
    image: "/experiences/panelist-photo.jpg",
  },
  {
    title: "Workshops",
    description: "Participate in diverse workshops tailored to enhance your career and technical skills. Delve into new topics and stay ahead in the fast-evolving tech landscape.",
    image: "/experiences/workshop-photo.jpg",
  },
  {
    title: "Meet and Network",
    description: "Connect with industry leaders, peers, and potential mentors. Build relationships that can propel your career forward and expand your professional network.",
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
          className="text-3xl md:text-5xl font-aileron font-bold text-center text-white"
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
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                  {experience.description}
                  <br />
                  {experience.disclaimer && (
                    <>
                      <br />
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">{experience.disclaimer}</span>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;