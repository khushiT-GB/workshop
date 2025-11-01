export default function EventSchedule() {
  const events = [
    {
      title: ["Foundations of", "Quantum Computing"],
      date: "06 November",
      year: "2025",
      time: "1:15PM to 4:15PM",
    },
    {
      title: ["Advanced Quantum", "Computing Concepts"],
      date: "13 November",
      year: "2025",
      time: "2:00PM to 5:30PM",
    },
    {
      title: ["Quantum Simulation", "and ", "Applications"],
      date: "20 November",
      year: "2025",
      time: "1:15PM to 4:15PM",
    },
  ];

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-black to-blue-900 relative flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Animated Background Blobs */}
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
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center mb-12 tracking-widest">
          EVENT SCHEDULE
        </h1>
        <div className="text-white font-bold text-lg text-center mb-12">
          Venue: Auditorium 2, Academic Building II, VIT Bhopal
        </div>

        {/* Events in One Row on Desktop */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-15 flex-wrap w-full max-w-7xl">
          {events.map((event, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-black/50 border border-white/10 rounded-3xl px-8 py-10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col justify-center items-center w-80 h-64 sm:w-96 sm:h-72 md:w-[340px] md:h-[280px] lg:w-[350px] lg:h-[300px]"
            >
              <div className="text-white font-bold text-base sm:text-lg font-normal mb-2">
                {event.date}
              </div>
              <div className="text-white/80 font-bold text-sm sm:text-base mb-1">
                {event.year}
              </div>
              <div className="text-white/80 font-bold text-sm sm:text-base mb-3">
                {event.time}
              </div>
              <div className="text-white/60 text-sm sm:text-base leading-snug">
                {event.title.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
