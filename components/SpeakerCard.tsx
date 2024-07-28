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
    <div className="mt-2 flex flex-col items-start p-4 rounded-lg">
      <h3 className="text-base font-bold">{speaker.name}</h3>
      <p className="text-sm text-neutral-600">{speaker.title}</p>
      <div className="flex space-x-2 mt-2">
        <a href={speaker.twitter} className="text-neutral-600 hover:text-black">
          <FaTwitter size={20} />
        </a>
        <a href={speaker.linkedin} className="text-neutral-600 hover:text-black">
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default SpeakerCard;
