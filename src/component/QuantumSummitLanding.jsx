import React from "react";
import logo from "../assets/logo.svg";
import chip from "../assets/chip.svg";
import robot from "../assets/robot.svg";
import atom from "../assets/atom.svg";
import event from "../assets/event.pdf";
import flyer from "../assets/flyer.pdf";

const handleRedirectAbout = () => {
  window.location.href = " https://vitbhopal.ac.in/leadership/";
};
const handleRedirect = () => {
  window.location.href = "https://forms.gle/1kBQs3xm6Bg7fYkz8";
};
const handleRedirectSchedule = () => {
  window.open(event, "_blank");
};
const handleRedirectEvent = () => {
  window.open(flyer, "_blank");
};
export default function QuantumSummitLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/30 blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px]"></div>

      {/* Header */}
      <header className="relative z-10 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-6 gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-transparent flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-[20vw] sm:w-[12vw] lg:w-[16vw] h-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="px-3 sm:px-5 py-2 border border-white rounded-full text-xs sm:text-sm hover:bg-white hover:text-gray-900 transition-colors"
            onClick={handleRedirectAbout}
          >
            About
          </button>
          <button
            className="px-3 sm:px-5 py-2 border border-white rounded-full text-xs sm:text-sm hover:bg-white hover:text-gray-900 transition-colors"
            onClick={handleRedirectEvent}
          >
            Event Overview
          </button>
          <button
            className="px-3 sm:px-5 py-2 border border-white rounded-full text-xs sm:text-sm hover:bg-white hover:text-gray-900 transition-colors"
            onClick={handleRedirectSchedule}
          >
            Schedule
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-12">
        {/* University Title */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-md sm:text-sm font-bold tracking-wider">
            VIT BHOPAL UNIVERSITY
          </h2>
          <p>brings</p>
        </div>

        {/* Hero Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
               bg-gradient-to-br from-purple-300 to-purple-600 
               bg-clip-text text-transparent"
          >
            International Workshop <br /> on Quantum Computing
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto px-4">
            Three days. One Quantum Leap - Theory, Innovation & Hands-on
            Simulation
          </p>
          <button
            className="m-2 border-2 bg-white text-black px-8 py-2 rounded-full border-2 border border-white"
            onClick={handleRedirect}
          >
            Register Now
          </button>
        </div>

        {/* Visual Content Container */}
        <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          {/* Left Icon - Quantum Chip */}
          <div className="absolute left-0 sm:left-4 lg:left-8 top-1/4 w-64 sm:w-48   transform -rotate-6 hover:rotate-0 transition-transform">
            <img
              src={chip}
              alt="Quantum Chip"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Center - AI Robot Head with circular background */}
          <div className="relative">
            {/* Circular ripple effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full border border-purple-500/20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[270px] sm:w-[360px] lg:w-[450px] h-[270px] sm:h-[360px] lg:h-[450px] rounded-full border border-purple-500/30"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[240px] sm:w-[320px] lg:w-[400px] h-[240px] sm:h-[320px] lg:h-[400px] rounded-full border border-purple-500/40"></div>
            </div>

            {/* Robot head image */}
            <div className="relative z-10 flex items-center justify-center">
              <img
                src={robot}
                alt="AI Robot"
                className="w-[40vw] sm:w-[35vw] lg:w-[29vw] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Icon - Atom Symbol */}
          <div className="absolute right-0 sm:right-4 lg:right-8 top-1/4 w-64 sm:w-48   transform rotate-12 hover:rotate-0 transition-transform">
            <img
              src={atom}
              alt="Atom Symbol"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>

      {/* Code indicator in top right */}
      <div className="absolute top-6 right-4 sm:right-8 text-gray-500">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
    </div>
  );
}
