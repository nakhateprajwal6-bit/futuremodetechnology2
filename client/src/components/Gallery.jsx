import { useState } from "react";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import gallery7 from "../assets/gallery-7.jpg";
import gallery8 from "../assets/gallery-8.jpg";
import "./Gallery.css";

const galleryImages = [
  { src: gallery1, alt: "Students learning with technology in modern classroom", span: "span-large" },
  { src: gallery2, alt: "Technology students collaborating on projects", span: "" },
  { src: gallery3, alt: "University computer lab with advanced equipment", span: "" },
  { src: gallery4, alt: "Students engaged in technology learning", span: "" },
  { src: gallery5, alt: "Educational technology workshop session", span: "" },
  { src: gallery6, alt: "Computer science classroom environment", span: "span-large" },
  { src: gallery7, alt: "Students working with modern technology", span: "" },
  { src: gallery8, alt: "Technology education in progress", span: "" }
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 6);

  const handleImageClick = (imageSrc) => {
    window.open(imageSrc, "_blank");
  };

  const handleKeyDown = (e, imageSrc) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.open(imageSrc, "_blank");
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            Gallery
          </h2>
          <p className="gallery-subtitle">
            Explore our state-of-the-art facilities and vibrant learning environment
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {imagesToShow.map((image, index) => (
            <div key={index} className={`gallery-item ${image.span}`}>
              <div className="gallery-item-inner">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  onClick={() => handleImageClick(image.src)}
                  onKeyDown={(e) => handleKeyDown(e, image.src)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View full size image: ${image.alt}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="show-more-container">
          <button
            onClick={() => setShowAll(!showAll)}
            className="show-more-button"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
}