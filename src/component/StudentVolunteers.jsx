import React from "react";

const SpeakerCard = ({ image, name, showInfo = true, registerLink }) => {
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
            Info
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
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
      name: "",
      image: null,
      showInfo: true,
      registerLink: "https://example.com/register",
    },
    {
      id: 2,
      name: "Dr. Phani Kumar",
      image: null,
      showInfo: true,
      registerLink: "https://example.com/register",
    },
    {
      id: 3,
      name: "",
      image: null,
      showInfo: true,
      registerLink: "https://example.com/register",
    },

    {
      id: 4,
      name: "Dr. Xavier Waintal",
      image: null,
      showInfo: false,
      registerLink: "https://example.com/register",
    },
    {
      id: 5,
      name: "Dr. Xavier Waintal",
      image: null,
      showInfo: false,
      registerLink: "https://example.com/register",
    },
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
          />
        ))}
      </div>

      {/* Footer */}
    </div>
  );
};

export default StudentVolunteers;
