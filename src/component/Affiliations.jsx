import { useEffect, useState } from "react";
import keysight from "../assets/keysight.png";
import cea from "../assets/cea.png";
import chinar from "../assets/chinar.png";
import diat from "../assets/diat.png";
import isserb from "../assets/iiser.png";
import q from "../assets/q.png";
import vit from "../assets/vit.png";

export default function AffiliationsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Placeholder logos - Replace with your actual affiliation logos
  const affiliations = [
    {
      id: 1,
      name: "Affiliation 1",
      logo: isserb,
    },
    {
      id: 2,
      name: "Affiliation 2",
      logo: keysight,
    },
    {
      id: 3,
      name: "Affiliation 3",
      logo: vit,
    },
    {
      id: 4,
      name: "Affiliation 4",
      logo: cea,
    },
    {
      id: 5,
      name: "Affiliation 5",
      logo: chinar,
    },
    {
      id: 6,
      name: "Affiliation 6",
      logo: diat,
    },
    {
      id: 7,
      name: "Affiliation 7",
      logo: q,
    },
  ];

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-black to-blue-900 relative flex items-center justify-center py-12 sm:py-16 md:py-20">
      {/* Animated flowing blobs */}
      <div className="absolute top-10 right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-400/30 to-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 left-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-indigo-400/30 to-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(30px, 10px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 1s;
        }

        .animation-delay-4000 {
          animation-delay: 1s;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-widest mb-4">
            JOIN US WITH
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg">
            Our Trusted Partners & Collaborators
          </p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {affiliations.map((affiliation) => (
            <div
              key={affiliation.id}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 aspect-video flex items-center justify-center"
            >
              <img
                src={affiliation.logo}
                alt={affiliation.name}
                className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
