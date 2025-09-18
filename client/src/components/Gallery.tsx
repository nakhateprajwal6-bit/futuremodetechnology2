import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryImages = [
  { src: gallery1, alt: "Students learning with technology in modern classroom", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Technology students collaborating on projects", span: "" },
  { src: gallery3, alt: "University computer lab with advanced equipment", span: "" },
  { src: gallery4, alt: "Students engaged in technology learning", span: "" },
  { src: gallery5, alt: "Educational technology workshop session", span: "" },
  { src: gallery6, alt: "Computer science classroom environment", span: "col-span-2 row-span-2" },
  { src: gallery7, alt: "Students working with modern technology", span: "" },
  { src: gallery8, alt: "Technology education in progress", span: "" }
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 8);

  return (
    <section id="gallery" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our state-of-the-art facilities and vibrant learning environment
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {imagesToShow.map((image, index) => (
            <div key={index} className={`${image.span} group`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-xl hover-lift cursor-pointer transition-all duration-300 group-hover:scale-105"
                onClick={() => window.open(image.src, "_blank")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(image.src, "_blank");
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full size image: ${image.alt}`}
              />
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}
