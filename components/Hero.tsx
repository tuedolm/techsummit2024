import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[90vh] mb-8">
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
