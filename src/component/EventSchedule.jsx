export default function EventSchedule() {
  const events = [
    {
      title: ["Foundations of", "Quantum Computing"],
      date: "06 November",
      year: "2025",
      time: "1:15PM to 4:15PM",
      details: [
        "Introduction to Quantum Mechanics and Quantum Computing",
        "Quantum bits (qubits) and quantum gates",
        "Quantum circuits and algorithms",
        "Hands-on exercises with introductory quantum programming (Qiskit, Cirq, etc.)",
      ],
    },
    {
      title: ["Advanced Quantum", "Computing Concepts"],
      date: "13 November",
      year: "2025",
      time: "2:00PM to 5:30PM",
      details: [
        "Advanced quantum algorithms (Shor's, HHL, etc.)",
        "Quantum error correction and noise mitigation",
        "Quantum information theory and entropy",
        "Recent advancements in Quantum Computing",
      ],
    },
    {
      title: ["Quantum Simulation", "and Practical", "Applications"],
      date: "20 November",
      year: "2025",
      time: "1:15PM to 4:15PM",
      details: [
        "Introduction to Quantum Simulation and its importance",
        "Hands-on simulation sessions using popular quantum simulators (e.g., Qiskit Aer, Cirq Simulator)",
        "Applications of Quantum Computing in various fields (Chemistry, Optimization, Machine Learning, etc.)",
        "Case studies and group discussions on practical implementations",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-black to-blue-900 relative flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* To add background image: style={{backgroundImage: 'url(your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}} */}

      {/* Animated flowing blobs */}
      <div className="absolute top-10 right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-400/30 to-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 left-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 right-40 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-indigo-400/30 to-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-purple-300/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-6000"></div>

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

        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 tracking-widest px-2">
          EVENT SCHEDULE
        </h1>
        <div className="text-white font-bold text-lg sm:text-lg md:text-lg lg:text-lg  text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          Venue: Auditorium 2, First Floor, Academic Building II, VIT Bhopal
        </div>

        {/* Events Container */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full max-w-6xl px-2 sm:px-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-stretch gap-4 sm:gap-5 md:gap-6"
            >
              {/* Left Card */}
              <div className="w-full lg:w-80 lg:min-w-[280px] xl:min-w-[320px] backdrop-blur-md bg-black/50 border border-white/10 rounded-full px-6 sm:px-8 py-8 sm:py-10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 flex flex-col justify-center">
                <div className="text-white text-sm sm:text-base font-normal leading-tight mb-3 sm:mb-4">
                  {event.date}
                </div>
                <div className="text-white/80 font-semibold text-xs sm:text-sm mb-1">
                  {event.year}
                </div>
                <div className="text-white/80 font-semibold text-xs sm:text-sm mb-2">
                  {event.time}
                </div>
                <div className="text-white/60 text-xs">
                  {event.title.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>

              {/* Right Card */}
              <div className="flex-1 backdrop-blur-md bg-black/50 border border-white/10 rounded-3xl px-5 sm:px-6 md:px-8 lg:px-10 py-5 sm:py-6 md:py-7 lg:py-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <ul className="space-y-2 sm:space-y-2.5">
                  {event.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-white text-xs sm:text-sm md:text-base leading-relaxed pl-4 sm:pl-5 relative"
                    >
                      <span className="absolute left-0 text-purple-400 font-bold text-sm sm:text-base">
                        •
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
