import React from "react";
import adarsh from "../assets/adarsh.jpeg";
import somya from "../assets/somya.jpeg";
import khushi from "../assets/khushi.jpeg";
import mokshad from "../assets/mokshad.jpeg";
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
const StudentVolunteers = () => {
  const organizers = [
    {
      id: 1,
      name: "Khushi Tiwary",
      image: khushi,
      showInfo: true,
      info: "UI/UX Designer",
      registerLink: "https://example.com/register",
    },
    {
      id: 2,
      name: "Somya Sharma",
      image: somya,
      showInfo: true,
      info: "Advertising",
      registerLink: "https://example.com/register",
    },
    {
      id: 3,
      name: "Adarsh Pratap Singh",
      image: adarsh,
      showInfo: true,
      info: "Full Stack Developer",
      registerLink: "https://example.com/register",
    },

    {
      id: 4,
      name: "Mokshad Bunde",
      image: mokshad,
      showInfo: true,
      info: "UI/UX Designer",
      registerLink: "https://example.com/register",
    },
    // {
    //   id: 5,
    //   name: "Ankshit",
    //   image: null,
    //   showInfo: true,
    //   info: "Backend Developer",
    //   registerLink: "https://example.com/register",
    // },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] py-16 px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Student{" "}
          <span className="text-emerald-400 italic font-serif">Volunteers</span>
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

export default StudentVolunteers;
