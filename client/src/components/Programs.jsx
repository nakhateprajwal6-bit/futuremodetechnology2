import { useState } from "react";
import { Code, Brain, Cloud, BarChart3, Smartphone } from "lucide-react"; 
import { Cpu, CircuitBoard, Move, Camera, Bot, SatelliteDish } from "lucide-react";
import webDevImage from "../assets/service-web.jpg";
import roboticsImage from "../assets/service-robotics.jpg";
import softwareImage from "../assets/service-software.jpg";
import iotImage from "../assets/iot.jpg";
import aiImage from "../assets/aiml.jpg";
import mobileImage from "../assets/service-mobile.jpg";
import dataImage from "../assets/service-datascience.jpg";
import "./Programs.css";

const allPrograms = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build dynamic and responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Next.js.",
    duration: "9 Months",
    color: "primary",
    image: webDevImage,
  },
  {
    icon: Bot,
    title: "Robotics Engineering",
    description:
      "Design and build intelligent robotic systems integrating mechanical, electrical, and software components.",
    duration: "18 Months",
    color: "primary",
    image: roboticsImage,
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Master modern programming languages and frameworks with hands-on projects and industry mentorship.",
    duration: "12 Months",
    color: "primary",
    image: softwareImage
  },
  {
    icon: SatelliteDish,
    title: "IoT & Remote Robotics",
    description:
      "Connect and control robots remotely via IoT technologies and wireless communication systems.",
    duration: "11 Months",
    color: "secondary",
    image: iotImage
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Explore machine learning, deep learning, and AI applications with cutting-edge tools and techniques.",
    duration: "18 Months",
    color: "secondary",
    image: aiImage
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Build native and cross-platform mobile applications for iOS and Android using modern frameworks.",
    duration: "11 Months",
    color: "secondary",
    image: mobileImage
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description:
      "Analyze complex data sets and extract insights using statistical methods and visualization tools.",
    duration: "16 Months",
    color: "primary",
    image: dataImage
  }
];

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedPrograms = showAll ? allPrograms : allPrograms.slice(0, 6);

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section id="programs" className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <h2 className="programs-title" data-testid="programs-title">
            Our Programs
          </h2>
          <p className="programs-subtitle" data-testid="programs-subtitle">
            Comprehensive technology education programs designed to meet industry demands.
          </p>
        </div>

        <div className="programs-grid">
          {displayedPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={program.title}
                className="program-card"
                onClick={() => handleProgramClick(program)}
                data-testid={`program-card-${index}`}
                role="button"
                aria-labelledby={`program-title-${index}`}
              >
                <div className={`program-icon-container ${program.color}`}>
                  <IconComponent className={`program-icon ${program.color}`} />
                </div>
                <h3 className="program-title" data-testid={`program-title-${index}`}>
                  {program.title}
                </h3>
                <p className="program-description" data-testid={`program-description-${index}`}>
                  {program.description}
                </p>
                <div className="program-footer">
                  <span className="program-duration" data-testid={`program-duration-${index}`}>
                    {program.duration}
                  </span>
                  <button className="program-learn-more">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
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

      {/* Modal Popup */}
      {selectedProgram && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="modal-close-button"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedProgram.image}
              alt={selectedProgram.title}
              className="modal-image"
            />
            <h3 className="modal-title">
              {selectedProgram.title}
            </h3>
            <p className="modal-description">
              {selectedProgram.description}
            </p>
            <div className="modal-duration">
              Duration: {selectedProgram.duration}
            </div>
            <button onClick={closeModal} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}