import React, { useState } from "react";

const faqData = [
  {
    question: "What is the Viet Tech Summit 2024?",
    answer:
      "The Viet Tech Summit 2024 is an annual conference for future-ready Vietnamese professionals, organized by Viet Spark and the Vietnam Tech Society. It includes panel discussions, workshops, and networking opportunities aimed at helping Vietnamese professionals thrive in the U.S. tech industry.",
  },
  {
    question: "When and where will the event take place?",
    answer:
      "The event will take place on August 16-17, 2024, in Silicon Valley, CA. The networking night will be held at Palo Alto Art Center on August 16, and the main conference will be at Burlingame Community Center on August 17.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "You can register for the event by visiting the registration section of our website and filling out the registration form. Don't miss out—register now!",
  },
  {
    question: "Who are the speakers at the event?",
    answer:
      "Our speakers include top professionals and industry leaders from various tech companies. Detailed information about the speakers can be found in the Speakers section of our website.",
  },
  {
    question: "What is the agenda for the event?",
    answer:
      "The event agenda includes panel discussions, workshops, networking sessions, and tours of Silicon Valley tech headquarters. Detailed agenda information is available in the Agenda section of our website.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full max-w-6xl mx-auto p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black">Frequently Asked Questions</h2>
      <div className="mt-12 space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-neutral-200">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left py-4 px-6 font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-neutral-50 text-neutral-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
