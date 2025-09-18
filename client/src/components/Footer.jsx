import { useState } from "react";
import { Facebook, Twitter, Linkedin, Instagram, X } from "lucide-react";
import logoImage from "../assets/logo.png";
import "./Footer.css";

// Simple modal content components
const HelpCenter = () => (
  <div>
    <h2 style={{marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700'}}>Help Center</h2>
    <p>Welcome to Future Mode Technology Help Center. Here you can find answers to common questions and get support for our programs.</p>
    <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Common Questions:</h3>
    <ul style={{paddingLeft: '1.5rem'}}>
      <li>How do I enroll in a program?</li>
      <li>What are the prerequisites?</li>
      <li>How can I contact support?</li>
    </ul>
  </div>
);

const PrivacyPolicy = () => (
  <div>
    <h2 style={{marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700'}}>Privacy Policy</h2>
    <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
    <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Information We Collect:</h3>
    <p>We collect information you provide when enrolling in programs, contacting us, or using our services.</p>
  </div>
);

const TermsOfService = () => (
  <div>
    <h2 style={{marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700'}}>Terms of Service</h2>
    <p>By using our services, you agree to these terms and conditions.</p>
    <h3 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Service Usage:</h3>
    <p>Our educational services are provided for learning and skill development purposes.</p>
  </div>
);

const FAQ = () => (
  <div>
    <h2 style={{marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700'}}>Frequently Asked Questions</h2>
    <div style={{marginBottom: '1rem'}}>
      <h3 style={{marginBottom: '0.5rem'}}>Q: How long are the programs?</h3>
      <p>A: Programs vary from 4 months to 18 months depending on the subject.</p>
    </div>
    <div style={{marginBottom: '1rem'}}>
      <h3 style={{marginBottom: '0.5rem'}}>Q: Do you offer online courses?</h3>
      <p>A: Yes, we offer both in-person and online learning options.</p>
    </div>
  </div>
);

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const supportLinks = [
    { id: "help", label: "Help Center" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "faq", label: "FAQ" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/futuremodetech", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/futuremodetech", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/futuremodetech", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/futuremodetech", label: "Instagram" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const openModal = (id) => {
    setModalContent(id);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const renderModalContent = () => {
    switch(modalContent) {
      case "help": return <HelpCenter />;
      case "privacy": return <PrivacyPolicy />;
      case "terms": return <TermsOfService />;
      case "faq": return <FAQ />;
      default: return null;
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="brand-header">
                <div className="brand-logo-container">
                  <img
                    src={logoImage}
                    alt="Future Mode Technology Logo"
                    className="brand-logo"
                  />
                </div>
                <span className="brand-name">Future Mode Technology</span>
              </div>
              <p className="brand-description">
                Empowering the next generation of technology leaders through innovative education and cutting-edge curriculum.
              </p>
              <div className="social-links">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <button
                      key={social.label}
                      onClick={() => window.open(social.href, "_blank")}
                      className="social-button"
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title">Quick Links</h3>
              <div className="footer-links">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="footer-section">
              <h3 className="footer-section-title">Support</h3>
              <div className="footer-links">
                {supportLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => openModal(link.id)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 Future Mode Technology. All rights reserved. | Designed with ❤️ for education
          </div>
        </div>
      </footer>

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={closeModal}
              className="modal-close-button"
            >
              <X size={24} />
            </button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </>
  );
}