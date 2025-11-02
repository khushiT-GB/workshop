import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../assets/logo.svg";
export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Top Section with 3 columns */}
      <div className="border-t border-b border-white/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Contact Section */}
          <div className="border-b md:border-b-0 md:border-r border-white/20 px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-wider">
              CONTACT
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base">qcw@vitbhopal.ac.in</p>
              <p className="text-sm sm:text-base">+91 9740482560</p>
            </div>
          </div>

          {/* Social Section */}
          <div className="border-b md:border-b-0 md:border-r border-white/20 px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-wider">
              SOCIAL
            </h3>
            <div className="flex justify-center items-center gap-4 sm:gap-6">
              <a
                href="https://www.facebook.com/VITUnivBhopal/"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/vit.bhopal"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/VITBhopal"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCFJ1o0OgutcUvG3lOm70v_w"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Date & Venue Section */}
          <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 tracking-wider">
              DATE & VENUE
            </h3>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-sm sm:text-base">
                Date : 6, 13, & 20 Nov 2025
              </p>
              <p className="text-xs sm:text-sm leading-relaxed">
                Venue : Auditorium, Academic Building - 02
                <br />
                VIT Bhopal
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Left - University Name */}
        <div className="text-center sm:text-left">
          <p className="text-base sm:text-lg md:text-xl font-light tracking-wide">
            VIT BHOPAL UNIVERSITY
          </p>
        </div>

        {/* Right - Logo */}
        <div className="flex items-center">
          {/* Logo Placeholder - Replace with actual logo */}
          <div className="flex items-center gap-3">
            {/* Circular Logo */}
            <div className="w-32 h-12 sm:w-32 sm:h-14 md:w-32 md:h-16  border-white flex items-center justify-center">
              <img src={logo} />
            </div>
            {/* Text Logo */}
            {/* <div className="text-right">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
                VIT
              </div>
              <div className="text-xs sm:text-sm tracking-widest">BHOPAL</div>
              <div className="text-[8px] sm:text-[9px] tracking-wide opacity-70">
                www.vitbhopal.ac.in
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
