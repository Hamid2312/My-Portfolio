import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

  const handleNavClick = (title) => {
    setActive(title);
    setIsMobileNavOpen(false);
  };

  return (
    <nav
      className={`
        ${styles.paddingX}
        fixed top-0 z-50 w-full flex items-center py-4
        transition-colors duration-300
        ${scrolled ? "bg-[#100d25]/90 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Hamid <span className="sm:block hidden">&nbsp;| Ali</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition`}
              onClick={() => handleNavClick(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMobileNav}
            aria-label="Toggle menu"
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileNavOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Dropdown */}
          {isMobileNavOpen && (
            <div className="absolute top-16 right-4 bg-[#1c1b33]/95 backdrop-blur-md shadow-lg rounded-lg p-6 w-48 z-40 animate-slide-in">
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-secondary"
                    } text-[16px] font-medium cursor-pointer hover:text-white transition`}
                    onClick={() => handleNavClick(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Slide animation */}
      <style>{`
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
