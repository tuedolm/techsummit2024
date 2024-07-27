import Image from "next/image";

const SponsoringSection = () => {
  return (
    <div id="sponsors" className="w-full max-w-6xl mx-auto p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-12">Our Sponsors</h2>

      <div className="space-y-16">
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Co-Sponsor</h3>
          <div className="flex justify-center">
            <Image src="/sponsors/Viettel.png" alt="Viettel" width={200} height={100} />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Supporting Sponsor</h3>
          <div className="flex justify-center">
            <Image src="/sponsors/Fptai.png" alt="FPT-AI" width={200} height={100} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SponsoringSection;
