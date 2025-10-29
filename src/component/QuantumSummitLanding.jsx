import React from 'react';
import logo from '../assets/logo.svg';
import chip from "../assets/chip.svg"
import robot from "../assets/robot.svg"
import atom from "../assets/atom.svg"
export default function QuantumSummitLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/30 blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px]"></div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="flex items-center gap-3">
          <div className=" bg-transparent flex items-center justify-center">
            <div className=" flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-[12vw] h-[12vw] object-contain" />
            </div>
          </div>
          
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-gray-900 transition-colors">
            Event Overview
          </button>
          <button className="px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-gray-900 transition-colors">
            About
          </button>
        </div>
      </header>

       {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-12">
        {/* University Title */}
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold tracking-wider">VIT BHOPAL UNIVERSITY</h2>
        </div>

        {/* Hero Title */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-bold leading-tight">
            The Summit for <span className="text-purple-400">Quantum</span>
            <br />
            <span className="text-purple-400">Computing</span> Enthusiasts
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Three day webinar focused ont sharing advancements in quantum Computing from the brightest mind in the Industry.
          </p>
        </div>

        {/* Visual Content Container */}
        <div className="relative flex justify-center items-center min-h-[500px]">
          {/* Left Icon - Quantum Chip */}
          <div className="absolute left-8  transform -rotate-6 hover:rotate-0 transition-transform">
            <img src={chip} alt="Quantum Chip" className="w-full h-full object-contain" />
          </div>

          {/* Center - AI Robot Head with circular background */}
          <div className="relative">
            {/* Circular ripple effects */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[500px] rounded-full border border-purple-500/20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[450px] h-[450px] rounded-full border border-purple-500/30"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] rounded-full border border-purple-500/40"></div>
            </div>
            
            {/* Robot head image */}
            <div className="relative z-10 flex items-center justify-center">
              <img src={robot} alt="AI Robot" className="w-[29vw] h-full object-contain" />
            </div>
          </div>

          {/* Right Icon - Atom Symbol */}
          <div className="absolute right-0 transform rotate-12 hover:rotate-0 transition-transform">
            <img src={atom} alt="Atom Symbol" className="w-full h-full object-contain" />
          </div>

          {/* Register Button */}
          {/* <div className="absolute bottom-0  right-16 mb-2">
            <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl">
              Register Now
            </button>
          </div> */}
        </div>

        {/* Footer text */}
        {/* <div className="absolute bottom-8 left-8 text-xs text-white-700 font-bold">
          VIT BHOPAL UNIVERSITY
        </div> */}
      </main>

      {/* Code indicator in top right */}
      <div className="absolute top-6 right-8 text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </div>
  );
}