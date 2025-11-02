import React from "react";
import { Quote } from "lucide-react";
import bg from "../assets/bg.svg";
export default function Highlights() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-black to-blue-900 relative flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Animated flowing blobs */}
      <div className="absolute top-10 right-5 sm:right-10 md:right-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-400/30 to-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-20 sm:top-30 md:top-40 left-5 sm:left-10 md:left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 sm:bottom-15 md:bottom-20 right-10 sm:right-20 md:right-40 w-[175px] h-[175px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-gradient-to-br from-indigo-400/30 to-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[225px] h-[225px] sm:w-[325px] sm:h-[325px] md:w-[450px] md:h-[450px] bg-gradient-to-br from-purple-300/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-6000"></div>

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

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center py-8 sm:py-12 md:py-16 lg:bottom-20 lg:mt-[12vw]">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.2em] text-white font-bold text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 tracking-wide sm:tracking-wider md:tracking-widest px-4">
          WORKSHOP HIGHLIGHTS
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:w-[75vw]">
          {/* Top Card (Join Us) - Spans 2 columns */}
          <div className="backdrop-blur-md bg-black/50 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 z-10 min-h-[25vh] sm:min-h-[30vh] lg:col-span-2 flex flex-col items-center">
            <svg
              width="40"
              height="26"
              viewBox="0 0 94 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 sm:mb-6 w-10 h-auto sm:w-[54px]"
            >
              <path
                d="M0 49.451C0 32.9673 3.07592 20.817 9.22775 13C16.1178 4.33333 27.3551 0 42.9398 0V20.3922C32.6047 20.3922 26.5349 25.915 24.7304 36.9608C24.0742 40.5294 23.7461 44.6928 23.7461 49.451V65H0L0 49.451ZM51.0602 49.451C51.0602 32.9673 54.1361 20.817 60.288 13C67.178 4.33333 78.4154 0 94 0V20.3922C83.6649 20.3922 77.5951 25.915 75.7906 36.9608C75.1344 40.5294 74.8063 44.6928 74.8063 49.451L74.8063 65L51.0602 65V49.451Z"
                fill="white"
              />
            </svg>
            <div className="text-white space-y-2 text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-semibold font-family-inter">
                  Join Us For A Comprehensive 3-Day Workshop
                </span>{" "}
                On Quantum Computing, Designed To Cater To Diverse Levels Of
                Expertise. Our Workshop Will Provide A Thorough Understanding Of
                The Principles, Applications, And Latest Advancements In Quantum
                Computing.
              </p>
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="backdrop-blur-md bg-black/50 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 z-10 min-h-[25vh] sm:min-h-[30vh]">
            <svg
              width="40"
              height="26"
              viewBox="0 0 94 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 sm:mb-6 w-10 h-auto sm:w-[54px]"
            >
              <path
                d="M0 49.451C0 32.9673 3.07592 20.817 9.22775 13C16.1178 4.33333 27.3551 0 42.9398 0V20.3922C32.6047 20.3922 26.5349 25.915 24.7304 36.9608C24.0742 40.5294 23.7461 44.6928 23.7461 49.451V65H0L0 49.451ZM51.0602 49.451C51.0602 32.9673 54.1361 20.817 60.288 13C67.178 4.33333 78.4154 0 94 0V20.3922C83.6649 20.3922 77.5951 25.915 75.7906 36.9608C75.1344 40.5294 74.8063 44.6928 74.8063 49.451L74.8063 65L51.0602 65V49.451Z"
                fill="white"
              />
            </svg>
            <div className="text-white space-y-3 text-sm md:text-base">
              <p>
                <span className="font-semibold font-family-inter">
                  What you will get ?
                </span>{" "}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Certificate of Recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Connect and Talk with Industry Experts</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Hands on Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Q&A Session</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="backdrop-blur-md bg-black/50 border border-white/10 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 z-10 min-h-[25vh] sm:min-h-[30vh]">
            <svg
              width="44"
              height="26"
              viewBox="0 0 94 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 sm:mb-6 w-10 h-auto sm:w-[54px]"
            >
              <path
                d="M0 49.451C0 32.9673 3.07592 20.817 9.22775 13C16.1178 4.33333 27.3551 0 42.9398 0V20.3922C32.6047 20.3922 26.5349 25.915 24.7304 36.9608C24.0742 40.5294 23.7461 44.6928 23.7461 49.451V65H0L0 49.451ZM51.0602 49.451C51.0602 32.9673 54.1361 20.817 60.288 13C67.178 4.33333 78.4154 0 94 0V20.3922C83.6649 20.3922 77.5951 25.915 75.7906 36.9608C75.1344 40.5294 74.8063 44.6928 74.8063 49.451L74.8063 65L51.0602 65V49.451Z"
                fill="white"
              />
            </svg>
            <div className="text-white space-y-3 text-sm md:text-base">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Comprehensive Lectures And Hands-On Sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Expert Speakers And Facilitators</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Collaborative Environment For Networking And Discussion
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Access To Quantum Computing Resources And Simulators
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Robot Illustration Area - Breaks out of container to full width */}
      <div className="absolute left-0 right-0 bottom-0 w-full">
        <div className="relative h-32 sm:h-48 md:h-64 flex items-center justify-center">
          {/* Central glow effect */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-purple-500/30 via-blue-500/20 to-transparent blur-2xl"></div>

          {/* Decorative circles */}
          <div className="absolute left-1/4 top-1/2 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 sm:border-4 border-purple-400/30 rounded-full animate-pulse"></div>
          <div
            className="absolute right-1/3 top-1/3 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 sm:border-4 border-blue-400/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Quantum circuit lines */}
          <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute bottom-2 sm:bottom-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

          {/* Placeholder for robot image - import and use your bg.svg here */}
          <img
            src={bg}
            alt="robot"
            className="w-full h-auto object-contain absolute bottom-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}
