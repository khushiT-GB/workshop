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

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...affiliations, ...affiliations, ...affiliations];

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

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-widest mb-4">
            AFFILIATIONS
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg">
            Our Trusted Partners & Collaborators
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className={`flex animate-scroll ${isPaused ? "paused" : ""}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedLogos.map((affiliation, index) => (
                <div
                  key={`${affiliation.id}-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10"
                >
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 w-40 sm:w-48 md:w-56 lg:w-64 h-24 sm:h-28 md:h-32 flex items-center justify-center">
                    <img
                      src={affiliation.logo}
                      alt={affiliation.name}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Text */}

        {/* Optional: Logo Grid for Mobile (Alternative View) */}
        <div className="mt-12 sm:mt-16 md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {affiliations.map((affiliation) => (
              <div
                key={affiliation.id}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 aspect-video flex items-center justify-center"
              >
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
