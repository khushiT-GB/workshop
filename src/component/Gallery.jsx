import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Placeholder images - Replace with your actual gallery images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
      alt: "Workshop Session 1",
      category: "Workshop",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
      alt: "Campus Event 1",
      category: "Campus",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      alt: "Student Activities 1",
      category: "Activities",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      alt: "Workshop Session 2",
      category: "Workshop",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
      alt: "Campus Event 2",
      category: "Campus",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      alt: "Student Activities 2",
      category: "Activities",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
      alt: "Workshop Session 3",
      category: "Workshop",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      alt: "Campus Event 3",
      category: "Campus",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      alt: "Student Activities 3",
      category: "Activities",
    },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-br from-black to-blue-900 relative">
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
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-widest mb-4">
            GALLERY
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg">
            Explore moments from our Quantum Computing Workshop
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image, index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer backdrop-blur-md bg-black/40 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                <span className="text-purple-400 text-xs sm:text-sm font-semibold mb-1">
                  {image.category}
                </span>
                <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-50"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-purple-400 text-xs sm:text-sm font-semibold mb-1">
                {selectedImage.category}
              </p>
              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold">
                {selectedImage.alt}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-2">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
