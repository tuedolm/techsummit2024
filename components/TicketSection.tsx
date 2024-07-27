import { motion } from "framer-motion";

const TicketSection = () => {
  return (
    <div id="tickets" className="h-auto w-full flex flex-col items-center justify-center p-8 md:p-16 mb-16 font-josefin">
      <div className="w-full max-w-6xl mx-auto relative">
        {/* Main Content */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-3xl md:text-7xl text-center font-sans font-bold text-black"
        >
          Get Your Tickets
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-center text-black space-y-6 relative"
        >
          <p className="text-md md:text-lg text-black">
            Secure your spot at TECH SUMMIT 2024 by purchasing your tickets now. Don't miss out on this transformative event!
          </p>
          <div className="w-full flex justify-center mt-8 relative">
            <iframe
              src="https://app.promotix.com/trade/select-tickets/Tech-Summit-2024-tickets?embedded_to_iframe=true"
              width="100%"
              height="1000"
              className="border-0"
              allowFullScreen
              title="Ticket Purchase"
              style={{ pointerEvents: 'auto' }} // Ensure pointer events are enabled
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TicketSection;
