import { motion } from 'framer-motion';
import Image from 'next/image';

const sponsors = {
  coOrganizer: [
    { name: 'Viettel AI', logo: '/sponsors/viettel.jpg' }
  ],
  silver: [
    { name: 'FPT AI', logo: '/sponsors/fpt.png' },
    { name: 'Wonderates', logo: '/sponsors/wonder-rates.png' },
    { name: 'LaCaphe', logo: '/sponsors/lacaphe.png' }
  ],
  bronze: [
    { name: 'Remitly', logo: '/sponsors/remitly.png' },
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
          className="text-3xl md:text-5xl font-aileron font-bold text-center mb-10"
        >
          Sponsors
        </motion.h2>
        
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">Co-organizer</h3>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            {sponsors.coOrganizer.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="mx-4 my-2 md:my-0"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-32 max-h-32 max-w-60 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">Silver</h3>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="mx-4 my-2 md:my-0"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-32 max-h-32 max-w-60 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6">Bronze</h3>
          <div className="flex flex-col items-center md:flex-row md:justify-center">
            {sponsors.bronze.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="mx-4 my-2 md:my-0"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-32 max-h-32 max-w-60 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
