import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const ExpandableCard = ({ speaker, onClose }: { speaker: any, onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="bg-black rounded-lg p-8 max-w-lg mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
      <p className="text-neutral-400">{speaker.title}</p>
      <p className="mt-4 text-neutral-200">{speaker.description}</p>
      <div className="flex space-x-4 mt-4">
        <a href={speaker.twitter} className="text-neutral-400 hover:text-white">
          <FaTwitter size={24} />
        </a>
        <a href={speaker.linkedin} className="text-neutral-400 hover:text-white">
          <FaLinkedin size={24} />
        </a>
      </div>
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">
        Close
      </button>
    </motion.div>
  </motion.div>
);

export default ExpandableCard;
