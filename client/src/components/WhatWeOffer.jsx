import { useState } from "react";
import { Bot, Cpu, Camera, SatelliteDish, Move, CircuitBoard, X } from "lucide-react";
import { Code, Cloud, Shield, BarChart3, Smartphone, Database, Box, Server, Globe } from "lucide-react";
import serviceRobotics from "../assets/service-robotics.jpg";
import serviceIndustrial from "../assets/service-industrial.jpg";
import serviceIoT from "../assets/iot.jpg";
import serviceWeb from "../assets/service-web.jpg";
import service3dPrinting from "../assets/3d-printing.jpg";
import serviceMobile from "../assets/service-mobile.jpg";
import serviceInternship from "../assets/service-internship.jpg";
import serviceCAD from "../assets/service-cad.jpg";
import serviceDataScience from "../assets/service-datascience.jpg";
import serviceSecurity from "../assets/service-security.jpg";
import serviceDevops from "../assets/service-devops.jpg";
import serviceBlockchain from "../assets/service-blockchain.jpg";
import serviceRD from "../assets/service-rd.jpg";
import serviceSoftware from "../assets/service-software.jpg";
import "./WhatWeOffer.css";

const allServices = [
    {
        icon: Bot,
        title: "Robotic Lab",
        description: "Hands-on lab work with robotics hardware to experiment, build, and learn advanced systems.",
        image: serviceRobotics,
    },
    {
        icon: CircuitBoard,
        title: "Industrial Training & Projects",
        description: "Gain practical experience working on industrial automation and control systems.",
        image: serviceIndustrial,
    },
    {
        icon: SatelliteDish,
        title: "IoT Solutions",
        description: "Develop smart connected devices and systems using cutting-edge Internet of Things technologies.",
        image: serviceIoT,
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Build interactive and responsive websites using modern web technologies and frameworks.",
        image: serviceWeb,
    },
    {
        icon: Move,
        title: "3D Printing",
        description: "Explore additive manufacturing techniques and create complex prototypes using 3D printing tools.",
        image: service3dPrinting,
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Design and develop mobile applications for Android and iOS using popular tools and platforms.",
        image: serviceMobile,
    },
    {
        icon: Cpu,
        title: "Internship Programs",
        description: "Intern with industry partners and gain real-world experience in engineering and technology.",
        image: serviceInternship,
    },
    {
        icon: Camera,
        title: "CAD Designing",
        description: "Master computer-aided design tools to create precise engineering drawings and models.",
        image: serviceCAD,
    },
    {
        icon: BarChart3,
        title: "Data Science",
        description: "Analyze large datasets to uncover insights and inform strategic decisions using statistical tools.",
        image: serviceDataScience,
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Implement robust security measures to protect networks, systems, and data from threats.",
        image: serviceSecurity,
    },
    {
        icon: Server,
        title: "DevOps Engineering",
        description: "Streamline software development and deployment processes with automation and best practices.",
        image: serviceDevops,
    },
    {
        icon: Globe,
        title: "Blockchain Development",
        description: "Build decentralized applications and smart contracts using blockchain technology.",
        image: serviceBlockchain,
    },
    {
        icon: Box,
        title: "R & D Services",
        description: "Engage in research and development projects to innovate and enhance engineering solutions.",
        image: serviceRD,
    },
    {
        icon: Database,
        title: "Software Development",
        description: "Create efficient, scalable, and maintainable software systems tailored to client needs.",
        image: serviceSoftware,
    }
];

export default function WhatWeOffer() {
    const [selectedService, setSelectedService] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const displayedServices = showAll ? allServices : allServices.slice(0, 6);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section id="services" className="what-we-offer-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        What We Offer
                    </h2>
                    <p className="section-description">
                        Explore our diverse services combining robotics, computer technologies, and innovative solutions.
                    </p>
                </div>

                <div className="services-grid">
                    {displayedServices.map((service, idx) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={idx}
                                onClick={() => handleServiceClick(service)}
                                className="service-card"
                            >
                                <div className="service-icon-container">
                                    <IconComponent className="service-icon" />
                                </div>
                                <h3 className="service-title">
                                    {service.title}
                                </h3>
                                <p className="service-description">
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="show-more-container">
                    <button
                        onClick={toggleShowAll}
                        className="show-more-button"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>

            {/* Modal */}
            {selectedService && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            onClick={closeModal}
                            className="modal-close-button"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={selectedService.image}
                            alt={selectedService.title}
                            className="modal-image"
                        />
                        <h3 className="modal-title">
                            {selectedService.title}
                        </h3>
                        <p className="modal-description">{selectedService.description}</p>
                    </div>
                </div>
            )}
        </section>
    );
}