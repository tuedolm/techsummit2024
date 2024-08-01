import React from "react";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile"; // Adjust the import path as needed

const RecapSection = () => {
  const isMobile = useIsMobile();

  return (
    <div id="recap" className="w-full max-w-6xl mx-auto p-8 md:pt-8 md:pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-aileron font-bold text-center text-black mb-4"
      >
        2023 Event Recap
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-center items-center"
      >
        <div className="aspect-w-16 aspect-h-9 w-full flex justify-center">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FVietnamTechSociety%2Fvideos%2F1518802512398264%2F&show_text=false&width=560&t=0"
            width="800"
            height={isMobile ? "200" : "450"}
            style={{ border: "none", overflow: "hidden" }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
            className="mobile-iframe"
          ></iframe>
        </div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center mt-2 md:mt-4 font-inter font-black"
      >
        Relive the moments from our recent Tech Summit 2023 event held in Silicon Valley. Watch the highlights and see how we connected, learned, and got inspired together!
      </motion.p>
    </div>
  );
};

export default RecapSection;
