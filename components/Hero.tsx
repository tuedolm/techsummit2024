"use client";

import Image from "next/image";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Hero = () => {
  useSmoothScroll(); // Ensure the smooth scroll hook is used here

  const handleScrollToTickets = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector("#tickets")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[90vh] mb-8 cursor-pointer"
      onClick={handleScrollToTickets}
    >
      <Image 
        src="/hero-banner.png" 
        alt="Banner Image" 
        fill 
        sizes="100vw" 
        className="object-cover object-center" // Use object-center to position the image
      />
    </div>
  );
};

export default Hero;
