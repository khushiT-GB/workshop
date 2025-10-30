import React from "react";

const SpeakerCard = ({ image, name, showInfo = true }) => {
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

const OurSpeakers = () => {
  const speakers = [
    {
      id: 1,
      name: "",
      image: null,
      showInfo: true,
    },
    {
      id: 2,
      name: "Dr. Phani Kumar",
      image: null,
      showInfo: true,
    },
    {
      id: 3,
      name: "",
      image: null,
      showInfo: true,
    },
    {
      id: 4,
      name: "Dr. Xavier Waintal",
      image: null,
      showInfo: false,
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
          />
        ))}
      </div>
    </div>
  );
};

export default OurSpeakers;
