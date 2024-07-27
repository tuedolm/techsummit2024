import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Company Tour",
    description:
      "Company Tour Section text",
    image: "/images/curator.jpg",
  },
  {
    title: "Panel Discussion",
    description:
      "Panel Discussion Section text",
    image: "/images/ameca.jpg",
  },
  {
    title: "Workshops",
    description:
      "Workshops Section text",
    image: "/images/vision.jpg",
  },
  {
    title: "Meet and Network",
    description:
      "Meet and Network Section text",
    image: "/images/ones_to_watch.jpg",
  },
];

const ExperienceSection = () => {
  return (
    <div id="experience" className="w-full max-w-6xl mx-auto p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black">Exclusive on-site experiences:</h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white dark:bg-neutral-900 rounded-lg shadow-md overflow-hidden">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
