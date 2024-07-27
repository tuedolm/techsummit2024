import { FaCalendarAlt, FaMapMarkerAlt, FaMicrophoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div id="about" className="h-auto w-full flex flex-col items-center justify-center p-8 md:p-16 mb-16 font-josefin">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Content */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-3xl md:text-7xl text-center font-sans font-bold text-black"
        >
          Tech Summit 2024
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-center text-black space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black">The Future Is Now: Get Ready To Connect, Learn, And Be Inspired!</h2>
          <p className="text-md md:text-lg text-black">
            TECH SUMMIT 2024 is an annual conference for future-ready Vietnamese professionals, organized by <span className="font-bold">VIET SPARK</span> and the <span className="font-bold">VIETNAM TECH SOCIETY</span>. This year, the summit returns to Silicon Valley with a transformative two-day event tailored for Vietnamese professionals and students aiming to thrive in the U.S. tech industry.
          </p>
          <p className="text-md md:text-lg text-black">
            The main conference offers engaging panel discussions with top speakers, cutting-edge AI workshops, and professional skill enhancement. Plus, enjoy exclusive tours of Silicon Valley tech headquarters, along with networking and mentoring opportunities.
          </p>
          <p className="font-bold text-lg md:text-xl text-black">DON'T MISS OUT—REGISTER NOW!</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="w-6 h-6 text-black" />
                <p className="text-black text-md md:text-lg">16 to 17 August 2024</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="w-6 h-6 text-black" />
                <p className="text-black text-md md:text-lg">Silicon Valley, CA</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <FaMicrophoneAlt className="w-6 h-6 text-black" />
                <p className="text-black text-md md:text-lg">17 Professional Speakers</p>
              </div>
            </div>
          </div>
          <a href="#register" className="scroll-link mt-8 px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-md text-lg font-bold inline-block">Save Your Seat!</a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
