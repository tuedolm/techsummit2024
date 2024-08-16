import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import ExpandableCard from "./ExpandableCard";
import useInViewAnimation from "@/hooks/useInViewAnimation"; // Update the import path as needed

const speakers = [
  {
    name: "TONY LAM",
    title: "Chief Growth Officer at Launch Your First",
    image: "/mentors/tonylam-photo.jpg",
    description: `
      Tony Lam has extensive experience in technical management, with over 14 years of experience at Cisco. After his time at Cisco, he became a strategic advisor, co-founder, co-owner, and investor in various startups across multiple industries, including IT, food, and healthcare,... Notably, his company, Mavens Creamery, received investment on season 10 of Shark Tank on ABC. Currently, he is the Chief Growth Officer at his own investment fund. Tony’s presence will undoubtedly bring invaluable experiences and lessons from his diverse ventures.
    `,
    linkedin: "https://www.linkedin.com/in/tonyvlam/",
  },
  {
    name: "AMBER THUY NGUYEN",
    title: "Senior Product Manager at Adobe",
    image: "/mentors/amber-photo.jpeg",
    description: `
      Amber Thuy Nguyen holds an MBA in Tech Entrepreneurship from the University of Southern California. With nearly 10 years of experience as a Product Manager at both local and international companies such as Deloitte, Adayroi.com, and VNP Group, Amber is now a Senior Product Manager at Adobe. She’s proficient in managing products related to Data Integration, Metadata for Cloud Platforms, and Data Mart Platforms, enhancing user experience through comprehensive product strategies and cross-functional collaboration. She has also received the Identity Excellence Award from the CIO for her expertise in developing Data and Platform as a Service.
    `,
    linkedin: "https://www.linkedin.com/in/thuyamber/",
  },
  {
    name: "DAN PHAN",
    title: "Senior Product Manager at Microsoft",
    image: "/mentors/dan-photo.jpeg",
    description: `
      Dan Phan graduated with a Bachelor’s degree in Computer Sciences from Nanyang Technological University, Singapore. He has 3 years of experience working in Singapore, starting as an SWE at Bank of America and later as an SWE and Manager at CITI before moving to the U.S. to pursue an MBA in Product Management at Carnegie Mellon University. Dan also worked at Google as an MBA Intern, where he improved the accuracy of Google Books Search. Currently, he is a Senior Product Manager focused on Cloud and AI products at Microsoft.
    `,
    linkedin: "https://www.linkedin.com/in/phan-dan/",
  },
  {
    name: "VY HONG",
    title: "Senior Software Engineer at Amazon",
    image: "/mentors/vy-photo.jpg",
    description: `
      Vy Hong holds a Bachelor’s degree in Computer Science from the University of New South Wales. He is currently the tech lead for Amazon MQ, specifically for RabbitMQ. Vy has previously worked at Microsoft and Zenefits. Soon, he will join the UK AI Safety Institute to help mitigate risks associated with artificial intelligence, such as misuse or AI surpassing human control.
    `,
    linkedin: "https://www.linkedin.com/in/vyhong/",
  },
  {
    name: "SAM TRAN",
    title: "CTO at Wonder Rates",
    image: "/mentors/sam-photo.jpeg",
    description: `
      Sam Tran has 10 years of experience as a Software Engineer and Tech Lead Manager at companies like Cruise, Scoop Technologies, and Qamera Design, specializing in distributed microservices backend architecture and system design. He holds a Master’s degree in Mechanical Engineering from Michigan State University. Currently, he is the CTO at Wonder Rates, with extensive experience in managing and deploying enterprise SaaS platforms in the whole loan industry. Sam is also actively involved in teaching skills in Data Structures & Algorithms for Software Engineers and is the author of "The Modern Law of Dynamic Programming."
    `,
    linkedin: "https://www.linkedin.com/in/samtran01/",
  },
  {
    name: "HA DINH",
    title: "Senior Data Scientist at Shopify",
    image: "/mentors/hadinh-photo.jpeg",
    description: `
      Ha Dinh holds a Bachelor’s degree in Marketing and Business Economics from the University of Cincinnati and later pursued a Master’s degree in Data Science at the University of British Columbia. With over 6 years of experience in product and customer behavior analytics, she has worked as a Data Analyst and Data Scientist at companies in both the U.S. and Canada. Currently, she is a Senior Product Data Scientist at Shopify, focusing on HR analytics. Besides her extensive experience in data analysis, Ha is the author of the blog hablogging.com and the YouTube channel Hà Viết Blog. She has also organized annual workshops for the Women in Data Science, Vancouver chapter and taught Python programming and Data Science at BrainStation.
    `,
    linkedin: "https://www.linkedin.com/in/hanhatdinh/",
  },
  {
    name: "TRUNG LE",
    title: "Software Engineering Manager at Amazon",
    image: "/mentors/trungle-photo.jpg",
    description: `
      Trung Le graduated from New Mexico State University and has more than 12 years of experience working as a Software Developer at Epic and currently at Amazon Alexa. Additionally, he has contributed to research in the field of Bioinformatics, with a focus on "CDAO-Store: Ontology-driven Data Integration for Phylogenetic Analysis."
    `,
    linkedin: "https://www.linkedin.com/in/trung-le-24204543/",
  },
  {
    name: "HIEN TRAN",
    title: "Data Analytics Manager at TikTok",
    image: "/mentors/hientran-photo.jpeg",
    description: `
      Hien Tran has more than 3 years of experience working as a Consultant and Account Manager, specializing in strategy development and business management. After earning his MBA in Information Systems and Data Analytics from George Washington University, Hien became a Data Analytics Manager at Yahoo, where he was responsible for revenue analysis and customer retention solutions, collaborating closely with Product, Sales, and Operations teams. Currently, he is a Data Analytics Manager at TikTok, supporting TikTok Live Organization in the U.S. market, working with Creators Management, Agency Management, Strategy & Ops, Campaign, Trust & Safety, Product, and Payment teams.
    `,
    linkedin: "https://www.linkedin.com/in/hientran91/",
  },
  {
    name: "ALEX QUYEN LE",
    title: "Global Product Lead at Google",
    image: "/mentors/alex-photo.jpeg",
    description: `
      Alex Quyen Le graduated with a Bachelor’s degree in Business Administration and Management Information Systems from Temple University. While still a student, she gained experience in various roles such as Data Analyst and Business Development Intern. With over 4 years of experience serving as a Business Consultant and Project Manager at major companies like Autodesk and EY, she is currently the Product Strategy & Commercialization Lead at Google. Alex will bring a wealth of valuable insights and lessons from her diverse experiences and expertise.
    `,
    linkedin: "https://www.linkedin.com/in/quyenvhle/",
  },
];

const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<{
    name: string;
    title: string;
    image: string;
    description: string;
    linkedin: string;
  } | null>(null);

  const handleClose = () => {
    setSelectedSpeaker(null);
  };

  const { ref, animation } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={animation}
      transition={{ duration: 1 }}
      id="speakers"
      className="w-full max-w-6xl mx-auto p-8 md:p-16"
    >
      <h2 className="text-3xl md:text-5xl font-aileron font-bold text-center text-black">Mentors</h2>
      <p className="text-center text-black mt-4 text-md">
      Connect with industry leaders in rapid-fire mentorship sessions designed to accelerate your growth and expand your network at lightning speed.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={animation}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <SpeakerCard speaker={speaker} onClick={() => setSelectedSpeaker(speaker)} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSpeaker && (
          <ExpandableCard speaker={selectedSpeaker} onClose={handleClose} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpeakersSection;
