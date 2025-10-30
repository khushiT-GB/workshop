import React from "react";
import geetanjli from "../assets/geetanjli.jpeg";
import hemant from "../assets/hemant.jpeg";
import abhinav from "../assets/abhinav.jpeg";
import ambe from "../assets/ambe.jpeg";
import rajdeep from "../assets/rajdeep.jpeg";

const SpeakerCard = ({ image, name, showInfo = true, info, registerLink }) => {
  const handleRegisterClick = (e) => {
    e.stopPropagation();
    if (registerLink) {
      window.open(registerLink, "_blank");
    }
  };

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

// Organizers Component - Blue/Emerald theme
const Organizers = () => {
  const organizers = [
    {
      id: 1,
      name: "Dr. Hemant K. Nashine",
      image: hemant,
      showInfo: true,
      info: "Chairperson, Dean SASL",
      registerLink: "https://example.com/register",
    },
    {
      id: 2,
      name: "Dr. Geetanjali Giri",
      image: geetanjli,
      showInfo: true,
      info: "Organizing Head",
      registerLink: "https://example.com/register",
    },
    {
      id: 3,
      name: "Dr. Rajdeep Singh Payal",
      image: rajdeep,
      showInfo: true,
      info: "Resources Head",

      registerLink: "https://example.com/register",
    },
    {
      id: 4,
      name: "Dr. Ambe Verma",
      image: ambe,
      showInfo: true,
      info: "Design Head",

      registerLink: "https://example.com/register",
    },
    {
      id: 5,
      name: "Dr. Abhinav Kumar",
      image: abhinav,
      showInfo: true,
      info: "Outreach Head",
      registerLink: "https://example.com/register",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] py-16 px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Our{" "}
          <span className="text-emerald-400 italic font-serif">Organisers</span>
        </h1>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {organizers.map((organizer) => (
          <SpeakerCard
            key={organizer.id}
            image={organizer.image}
            name={organizer.name}
            showInfo={organizer.showInfo}
            registerLink={organizer.registerLink}
            info={organizer.info}
          />
        ))}
      </div>

      {/* Footer */}
    </div>
  );
};

export default Organizers;
