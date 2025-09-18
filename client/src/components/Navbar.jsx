import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Moon, Sun } from "lucide-react";
import logoImage from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#vision", label: "Vision" },
    { href: "#programs", label: "Programs" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const useDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(useDark);
    document.documentElement.classList.toggle("dark", useDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const handleNavClick = (href) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const themeIcon = isDark ? <Sun className="icon" /> : <Moon className="icon" />;

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-transparent"}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo-container" onClick={scrollToTop}>
            <img src={logoImage} alt="Logo" className="logo-image" />
            <h1 className="logo-text">
              <span className="logo-text-gradient">
                FutureMode Technology
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="desktop-nav">
            <nav className="nav-links" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-button"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={toggleTheme}
              className="icon-button theme-toggle"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {themeIcon}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="mobile-icon" /> : <Menu className="mobile-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="mobile-nav-button"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="mobile-theme-button"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? (
                <>
                  <Sun className="theme-icon" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="theme-icon" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}