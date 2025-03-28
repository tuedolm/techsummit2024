import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SpeakerCard from "./SpeakerCard";
import ExpandableCard from "./ExpandableCard";
import useInViewAnimation from "@/hooks/useInViewAnimation"; // Update the import path as needed

const speakers = [
  {
    name: "TUOC LUONG",
    title: "CEO & Co-Founder at BodiData",
    image: "/speakers/tuocluong-photo.jpg",
    description: `
      We're thrilled to welcome Tuoc Luong, a trailblazer in the tech industry, as one of our distinguished panelists. Tuoc's extensive leadership background in both tech giants and startups brings a wealth of experience and valuable insights to the table.
      
      Tuoc previously served as the CEO of Shanda Online until 2014 and was the Global Senior Vice President at Yahoo from 2007 to 2010, where he led the Search Division and successfully increased market share. His career also includes senior roles such as Chief Technology Officer at Zazzle Inc., IAC Search & Media, Inc., and Microsoft. As the founder of Jybe, Inc. and Lookspark, both acquired by Yahoo, Tuoc has a proven track record of successful entrepreneurship.
      
      In addition to his corporate achievements, Tuoc is an active angel investor and adviser, supporting numerous startups in Silicon Valley. His experience in both leading established companies and fostering new ventures makes him a key figure in the evolving landscape of technology.
    `,
    linkedin: "https://www.linkedin.com/in/tuocluong/",
  },
  {
    name: "HUNG HOANG NGUYEN",
    title: "CTO at Viettel AI",
    image: "/speakers/hungnguyen-photo.jpeg",
    description: `
      🌊Driving the Wave of AI Development in Vietnam: Progress with LLM Virtual Assistants - Welcoming Mr. Nguyễn Hoàng Hưng, CTO of Viettel AI at Tech Summit 2024
      
      We are honored to introduce Mr. Nguyễn Hoàng Hưng, CTO of Viettel AI, who will be a speaker at Tech Summit 2024. Mr. Hưng will participate in the panel discussion "AI: Beyond the Horizon" and will also host a dedicated session on LLM Virtual Assistants, an advanced AI solution developed by Viettel AI.
      
      Mr. Hưng has nearly 20 years of experience working with major technology corporations in the fields of information security and artificial intelligence. As the Chief Technology Officer at Viettel AI, he leads core technology research projects, promotes collaborative research activities both domestically and internationally, and directs the unit's science and technology development strategy. Currently, he is particularly focused on and researching areas such as Generative AI (GenAI), foundation models, and high-performance computing for training AI models.
      
      Mr. Hưng will share insights on the challenges and opportunities of deploying large language models (LLM) in Vietnamese. His experiences in optimizing AI models, particularly in Vietnamese, to enhance interaction and better serve local users, will be incredibly valuable for young enthusiasts passionate about developing new technological innovations.
      
      Join us in listening to the valuable insights from Mr. Nguyễn Hoàng Hưng at Tech Summit 2024. This will be a great opportunity to gain deeper insights into AI technology research and how Vietnamese businesses can leverage this to develop and innovate new technological models.
    `,
    linkedin: "",
  },
  {
    name: "THAI DUONG",
    title: "Chief at Calif",
    image: "/speakers/thaiduong-photo.webp",
    description: `
      Mr. Thai Dương, Panelist for AI: Beyond the Horizon🌅Exclusive Panel Discussion at Conference Day - Tech Summit 2024
      
      We are pleased to introduce Mr. Thai Dương, who will participate in this year's deep-dive panel discussion on AI. Born in Saigon and describing himself as having “grown up on the Internet,” Mr. Thai Dương is a renowned cybersecurity engineer known for his significant contributions to detecting and mitigating SSL attack techniques such as BEAST, CRIME, and POODLE. Along with a colleague, he discovered a cryptographic vulnerability in ASP.NET that affected millions of websites and won the Pwnie Award in 2011.
      
      Thai has spoken at several prestigious conferences such as Black Hat Europe, Real World Crypto, and IEEE S&P. His research has been featured in the New York Times and BBC and was voted as the best attack technique of 2011, 2012, and 2013.
      
      With 12 years at Google, Thai led the design and assessment of security for thousands of products, co-founded the ISE Crypto team, and created Project Wycheproof and Google Tink. These projects are widely used in nearly all of Google's systems and thousands of Android applications. He won the Feats of Engineering Google Awards in 2017 and 2019.
      
      Currently, he is running Calif, a California-based cybersecurity company with the goal of protecting the world's critical digital infrastructure. He also frequently shares his insights on his personal blog: vnhacker.substack.com.
    `,
    linkedin: "https://www.linkedin.com/in/thaidn/",
  },
  {
    name: "TRIEU TRINH",
    title: "Senior Research Scientist at Google DeepMind",
    image: "/speakers/trieutrinh-photo.jpg",
    description: `
      Explore the World of AI with Trinh Hoang Trieu -  Panelist for AI: Beyond the Horizon Exclusive Panel Discussion at Conference Day - Tech Summit 2024
      
      When it comes to the AlphaGeometry project, an artificial intelligence (AI) tool capable of solving complex geometry problems and featured in the prestigious scientific journal Nature, we cannot overlook the name Trinh Hoang Trieu. This outstanding Vietnamese Ph.D. is currently working at Google DeepMind. With passion and dedication, Trieu and his colleagues have tirelessly researched and developed AlphaGeometry, an advanced AI tool that has laid the groundwork for groundbreaking advancements in the technology sector.
      
      Thanks to his remarkable contributions to AI research, Trieu has quickly become a prominent figure in the tech community. He shares, "Publishing research is just the first step in a long journey towards pursuing greater goals."
      
      So, what are his upcoming journeys and greater goals?
      
      Let's explore the path of this young scientist, only at this year's event. He will share invaluable knowledge, experiences, and insights accumulated throughout his journey at one of the world's leading technology companies. This is a rare opportunity to gain a deeper understanding of the path to success of a talented young scientist and how he is helping shape the future of artificial intelligence.
    `,
    linkedin: "https://www.linkedin.com/in/trinhhtrieu/",
  },
  {
    name: "RAY NGUYEN",
    title: "Distinguished Engineer at Marvell Technology",
    image: "/speakers/raynguyen-photo.jpg",
    description: `
      Dr. Ray Nguyen, who grew up in Vietnam, arrived in the United States in 2001 as an international student at the age of 18. He earned his BS degree from the University of Texas at Austin in 2006, followed by an MS and a PhD from Stanford University in 2008 and 2011, respectively, with a major in Electrical Engineering and a minor in Computer Science.

      With a combined career spanning over 20 years, Dr. Nguyen has spent much of his time at the intersection of artificial intelligence and integrated circuits, where he authored dozens of patents and publications. His work has set the state-of-the-art standards to the development of advanced integrated circuits that enhance data centers and fiber optics communication links, fundamental to modern AI technologies.

      After two major company acquisitions, first with Clariphy Communications in 2016 and second with Inphi Corporation in 2020, Dr. Nguyen is currently with Marvell Corporation, where he serves as a Distinguished Engineer and Senior Director of Engineering. At Marvell, Dr. Nguyen has led teams across the USA and Vietnam, delivering cutting-edge integrated circuit technologies & systems to the world’s leading tech companies.

      Dr. Nguyen is passionate about advancing technology and fostering development of young engineers in Vietnam. He aims to leverage young Vietnamese potentials to build a promising future through AI and integrated circuits, inspiring the next generation of innovators for years to come.
    `,
    linkedin: "https://www.linkedin.com/in/raynguyen/",
  },
  {
    name: "CHAU VU",
    title: "Co-Founder of Techcare Coaching",
    image: "/speakers/chauvu-photo.png",
    description: `
      Ms. Chau Vu - Co-founder of TechCare Coaching, with 10 years of industry experience as a software engineer. She has a passion for helping computer science students and software engineers explore suitable career paths, develop a growth mindset, and navigate workplace conflicts in the tech industry.

      Chau is also an active member of the Viet Tech and Viet Referral admin group, where she promotes knowledge sharing among Vietnamese tech professionals and advocates for more diversity in the tech industry.
    
      Chau Vu's workshop "How to use AI to improve developer productivity", covering how to use AI to spin up a personal project and learn about common challenges when developing and maintaining software with AI assistance. This workshop is suitable for both newcomers to tech and experienced software engineers who want to leverage AI in their work.
    `,
    linkedin: "https://www.linkedin.com/in/vuminhchau91/",
  },
  {
    name: "DUC PHAM",
    title: "CEO of Wonder Rates",
    image: "/speakers/ducpham-photo.jpg",
    description: `
      🌟Advice from CEO Duc Pham 💼 Workshop: Career Compass: Choose Your Path and Financial Planning.

      Don't miss the personal finance session with Duc Pham, CEO of Wonder Rates, one of the top 5 mortgage brokers in the US. This workshop is suitable for both newcomers to the tech industry and experienced software engineers looking to find a career path and financial goals that fit them, whether you are working in large corporations or startups.

      Duc Pham began his journey as a Senior Software Engineer, accumulating over 15 years of experience at major companies like Ericsson and Box. He then pivoted to the startup world, focusing on mortgage and real estate, achieving remarkable success with 200% growth, originating thousands of loans with over $1B in funding.

      With a deep understanding of the pros and cons of both corporate and startup environments, Mr. Pham will share his transparent and valuable insights at this upcoming workshop.
    `,
    linkedin: "https://www.linkedin.com/in/duc-phamvn/",
  },
  {
    name: "HUNG DOAN",
    title: "Staff Software Engineer at Databricks",
    image: "/speakers/hungdoan-photo.jpg",
    description: `
      💥 Enjoy being an IC (individual contributor) in software engineering but wonder how to thrive and gain recognition? 👉Discover practical strategies to overcome these challenges at the workshop "The Hitchhiker’s Guide to the Software Engineering IC Path" featuring Mr. Hung Doan - Staff Software Engineer @ Databricks

      🌟 Hung Doan specializes in innovative software architecture and back-end development. With a combination of vast experience and community engagement, Hung’s workshop is an excellent opportunity for budding developers, seasoned tech professionals, or anyone interested in the shifting dynamics of software engineering.

      🚀 Hung began his career as a Software Engineering Intern at tech giants like Facebook and Google while studying at the National University of Singapore. Since then, he has led critical projects at the Chan Zuckerberg Initiative, Coda, and Retool. Now at Databricks, he continues to push the boundaries of data environments and software development. Additionally, Hung is passionate about giving back to the community, teaching CS101 (Introduction to Computer Science with Python) at STEAM for Vietnam and actively mentoring in the Techsphere community.

      💡 Don’t miss this opportunity to learn from Hung Doan and gain insights into the software engineering IC path!
    `,
    linkedin: "https://www.linkedin.com/in/hungdoan741/",
  },
  {
    name: "SUNNY HIEN NGUYEN",
    title: "AI Product Lead at Twelve Labs",
    image: "/speakers/sunny-photo.jpeg",
    description: `
      Workshop "How to Bring AI from Research to Product" - Insights from the AI Product Lead of a Hot Startup that has raised $50 million USD in Series A

      We are thrilled to announce an exciting workshop on the second day of Tech Summit 2024, featuring Sunny Hien Nguyen, AI Product Lead at Twelve Labs.

      Sunny Hien Nguyen brings a wealth of knowledge and experience to the table. As an AI Product Lead at Twelve Labs, she has been at the forefront of bridging the gap between AI research and practical product applications. Her session will provide you with actionable strategies and real-world examples that will elevate your understanding of AI in product management.

      Workshop Highlights:
      ✨ Explore the features of products built on foundational AI models like GPT (OpenAI), Gemini (Google), or Twelve Labs.
      ✨ Learn the key differences between traditional and AI-driven product development and essential skills for AI product managers.
      ✨ Gain insights on overcoming current AI technology challenges to deliver products to users effectively.
    `,
    linkedin: "https://www.linkedin.com/in/sunnyhiennguyen/",
  },
  {
    name: "MANH NGUYEN",
    title: "Staff ML & Robotics (Tech Lead) at Cruise",
    image: "/speakers/manhnguyen-photo.jpeg",
    description: `
      🚗🫨 Ever freaked out by a self-driving car? Level up your knowledge at the workshop: "Optimizing the Robotic Mind: Cross-Industry Insights in AI Mobility" with Mr. Manh Nguyen (Max), Staff ML & Robotics Tech Lead @ Cruise at GM Cruise. 🚗🤖

    🌟 Join us for a session with Manh Nguyen, who excels in developing advanced machine-learning models for autonomous vehicles. With a wealth of expertise and hands-on experience, Manh's workshop is perfect for those who aspire to lead in tech, innovate, or simply explore the future of AI in mobility.

    🚀 Manh's career trajectory is nothing short of inspiring. Starting as a Research Scientist at KLA Corporation, he moved on to impactful roles at the University of Florida, Johannes Kepler University, and Technical University of Denmark. Currently, at GM Cruise, Manh is at the cutting edge of autonomous vehicle technology, working on optimizing machine learning models to revolutionize transportation. His unique blend of academic excellence and practical expertise promises to provide valuable insights into the potential of AI in various industries.
    `,
    linkedin: "https://www.linkedin.com/in/manhnguyenmath/",
  },
  {
    name: "TUAN DOAN",
    title: "Staff DS at Quora | Head of Growth POE",
    image: "/speakers/tuandoan-photo.jpg",
    description: `
    
    🚀"Data Science: What's left in the age of AI and LLM?" - Find out with Tuan Doan Nguyen, the Data Scientist behind an AI platform with millions of users💥💥

    📅 Dive into the workshop “Data Science: What's left in the age of AI and LLM?” with Mr. Tuan Doan Nguyen, bringing his expertise as Staff DS @ Quora and Head of Growth for POE, an AI chatbot platform designed to enhance user interaction with AI technology. Poe allows users to interact with state-of-the-art AI models such as GPT-4o, Claude 3.5 Sonnet, Stable Diffusion, etc., and boasts millions of monthly active users. Tuan stands out as one of the youngest professionals to hold a Staff/Tech Lead position at a global tech giant like Quora.
    
    📚 Tuan also shares his expertise through his popular Data Science blog on Medium, with 1.8K followers and almost 500K views in total: https://tuannguyen-doan.medium.com/
    
    🎓 Tuan graduated with honors in Statistics and Data Science from Yale University, ranking in the top 10% of his class. He received a full scholarship for an exchange program at Seoul National University in South Korea.
    
    Don't miss the opportunity to learn from Tuan's insights and expertise at Tech Summit 2024. Secure your spot today!
    `,
    linkedin: "https://www.linkedin.com/in/tuan-nguyen-doan",
  },
  {
    name: "ANH NGUYEN",
    title: "Member of Technical Staff at Microsoft AI",
    image: "/speakers/tuananhnguyen-photo.jpeg",
    description: `
      The race to Artificial General Intelligence (AGI) and the impact to fundamental AI research.
      
      🌟 Join us for a resourceful session with Anh Nguyen - Member of Technical Staff @ Microsoft AI, specializing in large-scale data curation and efficient model training. Anh brings a unique blend of research and practical application to his workshop, alongside his personal experiences, making it perfect for inspired entrepreneurs, fascinated techies, or anyone interested in pursuing a deeper understanding of modern AI.
      
      🚀 Anh began his career as an AI Developer Technology Intern and later as a Deep Learning Engineer at the global leader in AI and computing technology, NVIDIA. Following the release of ChatGPT, Anh pivoted to building AI models and conducting applied AI research at another tech giant, Microsoft. His adaptability and forward-thinking approach will provide valuable insights into what AI can achieve in the future.
    `,
    linkedin: "https://www.linkedin.com/in/anh-nguyen-1b0a05126/",
  },
  {
    name: "JAMES PHAN",
    title: "Co-Founder at Opsin",
    image: "/speakers/jamesphan-photo.jpg",
    description: `
      Ready to Kickstart Your Product Manager Career? This Workshop is a Must! 👉"𝗪𝗵𝗮𝘁 𝗗𝗼𝗲𝘀 𝗮 𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗿 𝗗𝗼? 𝗛𝗼𝘄 𝘁𝗼 𝗕𝗲𝗰𝗼𝗺𝗲 𝗢𝗻𝗲?" by James Pham.
      
      James Pham is currently Co-founder of Opsin. Backed by top-tier Venture Capital, Opsin is a cutting-edge GenAI security company. Opsin provides a comprehensive security orchestration layer that empowers organizations to build GenAI applications securely with their data. Previously, James was Head of Products at 3Box Labs. He led the Product Management team to develop decentralized AIs. Before 3Box Labs, James was Principal Product Manager at Pure Storage, leading Growth and SaaS Platforms. He obtained his Master's degree from Massachusetts Institute of Technology.
      
      James brings extensive knowledge and experience in AI/ML and product management, offering valuable insights for those interested in understanding or pursuing a career as a product manager. 💡 Don’t miss this chance to deepen your grasp of the product manager role in the AI world.
    `,
    linkedin: "https://www.linkedin.com/in/ninhmit/",
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
      <h2 className="text-3xl md:text-5xl font-aileron font-bold text-center text-black">Speakers</h2>
      <p className="text-center text-black mt-4 text-md">
        We are bringing you the perfect combination of content and experience to ignite your heart, equip your mind, and spark your skill.
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
