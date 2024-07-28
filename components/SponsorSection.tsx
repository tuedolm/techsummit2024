import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsors = {
  coOrganizer: [
    { name: 'Viettel AI', logo: '/sponsors/viettel.jpg' }
  ],
  silver: [
    { name: 'FPT AI', logo: '/sponsors/fpt.ai' },
    { name: 'LaCaphe', logo: '/sponsors/lacaphe.png' }
  ],
  bronze: [
    { name: 'Remitly', logo: '/images/company-d-logo.png' },
    { name: 'Vietkieu', logo: '/images/company-e-logo.png' }
  ]
};

const SponsorSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-10"
        >
          Sponsors
        </motion.h2>
        
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-center mb-6">Co-organizer</h3>
          <div className="flex justify-center">
            {sponsors.coOrganizer.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-24" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-center mb-6">Silver</h3>
          <div className="flex justify-center">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-24" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-center mb-6">Bronze</h3>
          <div className="flex justify-center">
            {sponsors.bronze.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="mx-4"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-24" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;