import React from "react";
import Image from "next/image";

const agendaItems = {
  "August 16": [
    {
      time: "1:00 PM - 5:00 PM",
      title: "Company Tour",
      location: "Various Locations",
      description: "Explore some of the leading tech companies in Silicon Valley.",
      speakers: [],
    },
    {
      time: "6:30 PM",
      title: "Welcome",
      location: "Main Hall",
      description: "Opening welcome by the event organizers.",
      speakers: [
        // {
        //   name: "John Doe",
        //   title: "Event Organizer",
        //   image: "/speakers/john_doe.jpg",
        // },
      ],
    },
    {
      time: "7:00 PM",
      title: "Casual Networking and Dinner",
      location: "Main Hall",
      description: "Join us for dinner and networking with fellow attendees.",
      speakers: [],
    },
    {
      time: "8:00 PM",
      title: "Live Music by Cỏ Band",
      location: "Main Stage",
      description: "Enjoy live music performances by Cỏ Band.",
      speakers: [],
    },
    {
      time: "9:00 PM",
      title: "Free Flow",
      location: "Lounge Area",
      description: "Relax and enjoy free-flowing drinks and conversations.",
      speakers: [],
    },
  ],
  "August 17": [
    {
      time: "9:00 AM - 10:00 AM",
      title: "Check-in",
      location: "Main Entrance",
      description: "Get your badges and materials for the day.",
      speakers: [],
    },
    {
      time: "10:00 AM - 10:15 AM",
      title: "Welcome Speech from Organizers and Sponsors",
      location: "Main Hall",
      description: "Kickoff speech from our organizers and sponsors.",
      speakers: [],
    },
    {
      time: "10:15 AM - 11:15 AM",
      title: "Panel Discussion",
      location: "Main Hall",
      description: "Discussion on the latest trends and innovations in tech.",
      speakers: [],
    },
    {
      time: "11:15 AM - 12:00 PM",
      title: "Panel Q&A",
      location: "Main Hall",
      description: "Q&A session with the panelists.",
      speakers: [],
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Lunch",
      location: "Dining Area",
      description: "Enjoy a variety of delicious meals.",
      speakers: [],
    },
    {
      time: "1:00 PM - 5:00 PM",
      title: "Workshops",
      location: "Various Locations",
      description: "Hands-on workshops on various tech topics.",
      speakers: [],
    },
    {
      time: "5:00 PM - 6:00 PM",
      title: "Closing Remarks, Raffle, and Networking",
      location: "Main Hall",
      description: "Final remarks, raffle draw, and networking opportunities.",
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
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                  {/* {item.speakers.length > 0 && (
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
                  )} */}
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
