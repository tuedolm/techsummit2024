import React from "react";

const agendaItems = {
  "Thu May 09": [
    {
      time: "8:00 AM - 9:00 AM PDT",
      duration: "1 Hour",
      title: "Registration & Networking Breakfast",
      location: "Rooftop",
      description: "",
      speakers: [],
    },
    {
      time: "8:15 AM - 9:00 AM PDT",
      duration: "45 Min",
      title: "Bloomberg Breakout: Q&AI With Hugging Face",
      location: "Insight Enclave",
      description:
        "Attendance is limited & registration is required for this session. In an intimate breakfast session, join Hugging Face CEO Clém Delangue to explore many of the top issues and innovations surrounding artificial intelligence today. We’ll cover topics including the debate around open vs. closed source, transparency and regulation, and the ethical development of these emerging technologies. The audience will have an opportunity to engage in the conversation and ask their burning questions.",
      speakers: [
        {
          name: "Clément Delangue",
          title: "Co-Founder & CEO, Hugging Face",
          image: "/images/clement.jpg",
        },
        {
          name: "Shirin Ghaffary",
          title: "AI Reporter, Bloomberg",
          image: "/images/shirin.jpg",
        },
      ],
    },
    {
      time: "9:05 AM - 9:10 AM PDT",
      duration: "5 Min",
      title: "Welcome Remarks",
      location: "Mainstage",
      description: "",
      speakers: [
        {
          name: "Emily Chang",
          title: "Host & Executive Producer, Bloomberg Originals",
          image: "/images/emily.jpg",
        },
      ],
    },
  ],
  "Fri May 10": [
    {
      time: "8:00 AM - 9:00 AM PDT",
      duration: "1 Hour",
      title: "Registration & Networking Breakfast",
      location: "Rooftop",
      description: "",
      speakers: [],
    },
    {
      time: "8:15 AM - 9:00 AM PDT",
      duration: "45 Min",
      title: "Bloomberg Breakout: Q&AI With Hugging Face",
      location: "Insight Enclave",
      description:
        "Attendance is limited & registration is required for this session. In an intimate breakfast session, join Hugging Face CEO Clém Delangue to explore many of the top issues and innovations surrounding artificial intelligence today. We’ll cover topics including the debate around open vs. closed source, transparency and regulation, and the ethical development of these emerging technologies. The audience will have an opportunity to engage in the conversation and ask their burning questions.",
      speakers: [
        {
          name: "Clément Delangue",
          title: "Co-Founder & CEO, Hugging Face",
          image: "/images/clement.jpg",
        },
        {
          name: "Shirin Ghaffary",
          title: "AI Reporter, Bloomberg",
          image: "/images/shirin.jpg",
        },
      ],
    },
    {
      time: "9:05 AM - 9:10 AM PDT",
      duration: "5 Min",
      title: "Welcome Remarks",
      location: "Mainstage",
      description: "",
      speakers: [
        {
          name: "Emily Chang",
          title: "Host & Executive Producer, Bloomberg Originals",
          image: "/images/emily.jpg",
        },
      ],
    },
  ],
};

const AgendaSection = () => {
  return (
    <div id="agenda" className="w-full max-w-6xl mx-auto p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black">Agenda</h2>
      <div className="mt-12 space-y-12">
        {Object.entries(agendaItems).map(([day, items], index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4 text-black">{day}</h3>
            {items.map((item, idx) => (
              <div key={idx} className="flex space-x-4 mb-4">
                <div className="flex-1 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-neutral-700 dark:text-neutral-300">{item.time}</div>
                      <div className="text-sm text-neutral-500">{item.duration}</div>
                    </div>
                    <div className="bg-neutral-200 dark:bg-neutral-800 p-2 rounded text-neutral-500">{item.location}</div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-neutral-800 dark:text-neutral-100">{item.title}</h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-400">{item.description}</p>
                  {item.speakers.length > 0 && (
                    <div className="mt-4 flex space-x-4">
                      {item.speakers.map((speaker, speakerIdx) => (
                        <div key={speakerIdx} className="flex items-center space-x-2">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-10 h-10 rounded-full object-cover"
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
