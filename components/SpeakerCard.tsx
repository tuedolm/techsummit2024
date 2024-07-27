import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const SpeakerCard = ({ speaker, onClick }: { speaker: any; onClick: () => void }) => (
  <div className="relative group cursor-pointer" onClick={onClick}>
    <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-lg">
      <Image
        src={speaker.image}
        alt={speaker.name}
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
      <h3 className="text-white text-base font-bold">{speaker.name}</h3>
      <p className="text-neutral-400 text-sm">{speaker.title}</p>
      <div className="flex space-x-1 mt-1">
        <a href={speaker.twitter} className="text-neutral-400 hover:text-white pointer-events-auto">
          <FaTwitter size={20} />
        </a>
        <a href={speaker.linkedin} className="text-neutral-400 hover:text-white pointer-events-auto">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default SpeakerCard;
