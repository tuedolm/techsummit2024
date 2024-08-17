import React from "react";
import Image from "next/image";

const agendaItems = {
  "Friday, August 16": [
    {
      time: "1:00 PM - 5:00 PM",
      title: "Company Tour",
      location: "Various Locations",
      description: "2:00 - 3:30 PM: Microsoft Tour.\n\n3:30 - 5:00 PM: Google Tour - Mountain View Campus.\n\n*Disclaimer: Company tour is a complementary event to inspire Vietnamese students to pursue a career in Tech. Availability is on first come first serve basis",
      speakers: [],
    },
    {
      time: "6:00 PM - 7:00 PM",
      title: "Check in & Dinner",
      location: "Main Hall",
      description:"Please have your tickets ready on your phone for easy check-in. Your Promotix ticket can be found in your email.\n\nEnjoy a delicious Vietnamese-inspired dinner.",
      speakers: [],
    },
    {
      time: "7:00 PM - 8:00 PM",
      title: "Welcome speech by the Tech Summit 2024 Organizers & Networking Game",
      location: "Main Hall",
      description: "Get to know other attendees and guests through a fun networking game.\n\nPrize will be awarded to the winners.",
      speakers: [],
    },
    {
      time: "8:00 PM - 9:00 PM",
      title: "Live Music with Cỏ Band",
      location: "Main Stage",
      description: "Sit back, relax, and enjoy the captivating live music performance by Cỏ Band, playing songs by Chillies, Thuy, Ngot, Stephen Sanchez, Olivia Rodrigo, and Vu.",
      speakers: [],
    },
    {
      time: "9:00 PM - 10:00 PM",
      title: "Free Flow Networking",
      location: "Lounge Area",
      description: "Unwind and continue your conversations in a more casual setting, with free-flowing drinks and refreshments available.",
      speakers: [],
    },
  ],
  "Saturday,August 17": [
    {
      time: "9:00 AM - 9:45 AM",
      title: "Check in & Registration",
      location: "Sequoia Room",
      description: "Check in and registration for the event.",
      speakers: [],
    },
    {
      time: "9:45 AM - 10:00 AM",
      title: "Welcome by organizers",
      location: "Sequoia Room",
      description: "Kickoff speech from the organizers.",
      speakers: [],
    },
    {
      time: "10:00 AM - 10:15 AM",
      title: "Keynote",
      location: "Sequoia Room",
      description: "Keynote speech.",
      speakers: [
        { name: "Trieu Trinh", title: "Keynote Speaker", image: "/speakers/trieutrinh-photo.jpg" },
        { name: "Hung Hoang Nguyen", title: "Keynote Speaker", image: "/speakers/hungnguyen-photo.jpeg" },
      ],
    },
    {
      time: "10:15 AM - 11:45 AM",
      title: "Panel Discussion: AI Beyond the Horizon",
      location: "Sequoia Room",
      description: "Panel discussion on AI: Beyond the Horizon.",
      speakers: [
        { name: "Trieu Trinh", title: "Panelist", image: "/speakers/trieutrinh-photo.jpg" },
        { name: "Hung Hoang Nguyen", title: "Panelist", image: "/speakers/hungnguyen-photo.jpeg" },
        { name: "Ray Nguyen", title: "Panelist", image: "/speakers/raynguyen-photo.jpg" },
        { name: "Tuoc Luong", title: "Panelist", image: "/speakers/tuocluong-photo.jpg" },
      ],
    },
    {
      time: "11:45 AM - 12:15 PM",
      title: "Lunch Break",
      location: "Sequoia Room",
      description: "Break for lunch.",
      speakers: [],
    },
    {
      time: "12:15 PM - 1:00 PM",
      title: "Speed Mentoring",
      location: "Maple Room 2nd floor",
      description: "Speed mentoring session.",
      speakers: [],
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Workshop: Implementing LLM Virtual Assistants in Vietnam: Technological Challenges and Opportunities",
      location: "Sequoia Room 1st floor",
      description: "Workshop on implementing LLM virtual assistants in Vietnam.",
      speakers: [
        { name: "Hung Hoang Nguyen", title: "Workshop Speaker", image: "/speakers/hungnguyen-photo.jpeg" },
      ],
    },
    {
      time: "1:00 PM - 2:00 PM",
      title: "Workshop: How to bring AI from research to product",
      location: "Maple Room 2nd floor",
      description: "Workshop on transitioning AI from research to product.",
      speakers: [
        { name: "Sunny Hien Nguyen", title: "Workshop Speaker", image: "/speakers/sunny-photo.jpeg" },
      ],
    },
    {
      time: "2:00 PM - 3:00 PM",
      title: "Workshop: Optimizing the Robotic Mind: Cross-Industry Insights in AI Mobility",
      location: "Sequoia Room 1st floor",
      description: "Workshop on cross-industry AI mobility insights.",
      speakers: [
        { name: "Manh Nguyen", title: "Workshop Speaker", image: "/speakers/manhnguyen-photo.jpeg"},
      ],
    },
    {
      time: "2:00 PM - 3:00 PM",
      title: "Workshop: Data Science: What's left in the age of AI and LLM?",
      location: "Maple Room 2nd floor",
      description: "Workshop on the current state of data science.",
      speakers: [
        { name: "Tuan Doan Nguyen", title: "Workshop Speaker", image: "/speakers/tuandoan-photo.jpg" },
      ],
    },
    {
      time: "2:00 PM - 3:00 PM",
      title: "Workshop: Living safely in this AI area",
      location: "Elm Room 2nd floor",
      description: "Workshop on safe practices in the AI era.",
      speakers: [
        { name: "Thai Duong", title: "Workshop Speaker", image: "/speakers/thaiduong-photo.webp" },
      ],
    },
    {
      time: "2:00 PM - 3:00 PM",
      title: "Workshop: The Hitchhiker's Guide to the Software Engineering IC Path",
      location: "Sequoia Room 1st floor",
      description: "Workshop on the software engineering individual contributor path.",
      speakers: [
        { name: "Hung Doan", title: "Workshop Speaker", image: "/speakers/hungdoan-photo.jpg" },
      ],
    },
    {
      time: "3:00 PM - 4:00 PM",
      title: "Workshop: Race to AGI and the impact to fundamental AI research",
      location: "Maple Room 2nd floor",
      description: "Workshop on the race to AGI.",
      speakers: [
        { name: "Anh Nguyen", title: "Workshop Speaker", image: "/speakers/tuananhnguyen-photo.jpeg" },
      ],
    },
    {
      time: "3:00 PM - 4:00 PM",
      title: "Workshop: What does a Product Manager do? How to become one?",
      location: "Elm Room 2nd floor",
      description: "Workshop on product management.",
      speakers: [
        { name: "James Pham", title: "Workshop Speaker", image: "/speakers/jamesphan-photo.jpg" },
      ],
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Workshop: How to use AI to improve developer productivity",
      location: "Sequoia Room 1st floor",
      description: "Workshop on using AI to boost developer productivity.",
      speakers: [
        { name: "Chau Vu", title: "Workshop Speaker", image: "/speakers/chauvu-photo.png" },
      ],
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Workshop: Big Tech or Startups: Differences and common traits",
      location: "Maple Room 2nd floor",
      description: "Workshop on comparing big tech and startups.",
      speakers: [
        { name: "Tuoc Luong", title: "Workshop Speaker", image: "/speakers/tuocluong-photo.jpg" },
      ],
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Workshop: Career Compass: Choose Your Path and Financial Planning",
      location: "Elm Room 2nd floor",
      description: "Workshop on career development and financial planning.",
      speakers: [
        { name: "Duc Pham", title: "Workshop Speaker", image: "/speakers/ducpham-photo.jpg" },
      ],
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "Lucky Draw & Networking (Snacks provided)",
      location: "Sequoia Room",
      description: "End of day lucky draw and networking with snacks provided.",
      speakers: [],
    },
  ],
};

const AgendaSection = () => {
  return (
    <div id="agenda" className="w-full max-w-6xl mx-auto p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-aileron font-bold text-center text-black">2024 Agenda</h2>
      <div className="mt-12 space-y-12">
        {Object.entries(agendaItems).map(([day, items], index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4 text-black">{day}</h3>
            {items.map((item, idx) => (
              <div key={idx} className="flex space-x-4 mb-4">
                <div className="flex-1 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg text-neutral-700 dark:text-neutral-300">{item.time}</div>
                    </div>
                    <div className="bg-blue-700 dark:bg-neutral-800 p-2 rounded text-white">{item.location}</div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap">{item.description}</p>
                  {item.speakers.length > 0 && (
                    <div className="mt-4 flex space-x-4">
                      {item.speakers.map((speaker, speakerIdx) => (
                        <div key={speakerIdx} className="flex items-center space-x-2">
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-10 h-10 rounded-full object-cover"
                            width={40}
                            height={40}
                          />
                          <div>
                            <div className="text-neutral-800 dark:text-neutral-100 font-bold">{speaker.name}</div>
                            <div className="text-neutral-500 text-sm">{speaker.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaSection;
