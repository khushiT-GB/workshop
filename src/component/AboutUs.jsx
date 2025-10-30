import building from "../assets/building.svg";

export default function AboutUs() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative flex items-center justify-center">
      {/* Background image container - Add your building image here */}
      {/* <div className="absolute inset-0 z-0">
        <img 
          src="your-building-image.jpg" 
          alt="VIT Bhopal Campus" 
          className="w-full h-full object-cover opacity-80"
        />
      </div> */}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-[1]"></div>

      {/* Animated flowing blobs */}
      <div className="absolute top-10 right-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-purple-400/20 to-blue-500/10 rounded-full blur-3xl animate-blob z-[2]"></div>
      <div className="absolute top-40 left-20 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-blue-400/20 to-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 z-[2]"></div>

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
      `}</style>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        {/* Header with Quote Icon */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-start gap-2 sm:gap-4">
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <svg
                width="60"
                height="60"
                viewBox="0 0 94 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              >
                <path
                  d="M0 49.451C0 32.9673 3.07592 20.817 9.22775 13C16.1178 4.33333 27.3551 0 42.9398 0V20.3922C32.6047 20.3922 26.5349 25.915 24.7304 36.9608C24.0742 40.5294 23.7461 44.6928 23.7461 49.451V65H0L0 49.451ZM51.0602 49.451C51.0602 32.9673 54.1361 20.817 60.288 13C67.178 4.33333 78.4154 0 94 0V20.3922C83.6649 20.3922 77.5951 25.915 75.7906 36.9608C75.1344 40.5294 74.8063 44.6928 74.8063 49.451L74.8063 65L51.0602 65V49.451Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-wide">
              ABOUT US
            </h1>
          </div>

          {/* University Name - Top Right */}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Card */}
          <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-3xl sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              VIT Bhopal University, established in 2017 in Madhya Pradesh, is a
              leading private institution dedicated to fostering innovation and
              excellence in higher education. Renowned for its advanced
              curriculum and world-class campus, VIT Bhopal offers a diverse
              range of undergraduate, postgraduate, and integrated programs in
              engineering, technology, management, computer applications,
              biosciences, and architecture.
            </p>
          </div>

          {/* Right Card */}
          <div className="backdrop-blur-md bg-black/40 border border-white/20 rounded-3xl sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              With modern infrastructure, state-of-the-art laboratories, and
              experienced faculty, the university emphasizes experiential
              learning, research, and global exposure. Popular courses include
              Computer Science & Engineering (AI, Cyber Security, Cloud
              Computing), Aerospace Engineering, Mechanical Engineering,
              Electronics & Communication, and Management.
            </p>
          </div>
        </div>
      </div>

      {/* Building Image at Bottom - Will be visible when you add your image */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-48 sm:h-64 md:h-80 lg:h-96 z-[3] pointer-events-none">
        {/* Add your building image here */}
        <img
          src={building}
          alt="VIT Bhopal Building"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
