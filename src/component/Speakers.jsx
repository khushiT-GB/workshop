import React from "react";
import ankur from "../assets/ankur.jpeg";
import manisha from "../assets/manisha.jpeg";
import phani from "../assets/phalani.jpeg";
import xavier from "../assets/xavier.jpeg";
import pranav from "../assets/pranav.jpeg";
import soumya from "../assets/soumya.jpeg";
import rukshan from "../assets/rukshan.jpeg";

const SpeakerCard = ({ image, name, showInfo = true, info }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
      <div className="aspect-[3/4] bg-gray-300">
        {image ? (
          <img
            src={image}
            alt={name || "Speaker"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500"></div>
        )}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {name && <h3 className="text-xl font-semibold mb-2">{name}</h3>}
        {showInfo && (
          <button className="flex items-center text-sm font-medium hover:underline">
            {info}
          </button>
        )}
      </div>
    </div>
  );
};

const OurSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr.Ankur Raina",
      image: ankur,
      showInfo: true,
      info: "Indian Institute of Science Education and Research Bhopal, India",
    },
    {
      id: 2,
      name: "Dr. Phani Kumar Peddibhotla",
      image: phani,
      showInfo: true,
      info: "Indian Institute of Science Education and Research Bhopal, India",
    },
    {
      id: 3,
      name: "Dr. Xavier Waintal",
      image: xavier,
      showInfo: true,
      info: "Director of Research CEA France",
    },
    {
      id: 4,
      name: "Dr. Manisha Nene",
      image: manisha,
      showInfo: true,
      info: "Defence Institute of Advanced Technology (DIAT), Pune, India",
    },
    {
      id: 5,
      name: "Dr. Pranav Mundada",
      image: pranav,
      showInfo: true,
      info: "Head of Hardware Automation and Integration, Q-CTRL, USA",
    },
    {
      id: 6,
      name: "Mr. Soumya Dey",
      image: soumya,
      showInfo: true,
      info: "R&D team Lead,Keysight Infini,India",
    },
    {
      id: 7,
      name: "Dr. Rukshan-ul-haq",
      image: rukshan,
      showInfo: true,
      info: "CEO, Chinar Quantum AI, India",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1a1a2e] py-16 px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Our <span className="text-cyan-400 italic font-serif">Speakers</span>
        </h1>
      </div>

      {/* Speakers Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            image={speaker.image}
            name={speaker.name}
            showInfo={speaker.showInfo}
            info={speaker.info}
          />
        ))}
      </div>
    </div>
  );
};

export default OurSpeakers;
