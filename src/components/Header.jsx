"use client"

import { useState } from "react"

const Header = ({ onNavClick, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavigation = (section) => {
    onNavClick(section)
    setMenuOpen(false)
  }

  return (
    <header className="site_header">
      <div className="logo_area">
        <h1>
          Not <span className="highlight">YourSpace</span>
        </h1>
        <p className="tagline">Lohegaon, Pune</p>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "main_nav open" : "main_nav"}>
        <ul>
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home" onClick={() => handleNavigation("home")}>
              Home
            </a>
          </li>
          <li className={activeSection === "mess" ? "active" : ""}>
            <a href="#mess" onClick={() => handleNavigation("mess")}>
              Mess Timetable
            </a>
          </li>
          <li className={activeSection === "rooms" ? "active" : ""}>
            <a href="#rooms" onClick={() => handleNavigation("rooms")}>
              Room Directory
            </a>
          </li>
          <li className={activeSection === "facilities" ? "active" : ""}>
            <a href="#facilities" onClick={() => handleNavigation("facilities")}>
              Facilities
            </a>
          </li>
          <li className={activeSection === "faqs" ? "active" : ""}>
            <a href="#faqs" onClick={() => handleNavigation("faqs")}>
              FAQs
            </a>
          </li>
          <li className={activeSection === "enquiry" ? "active" : ""}>
            <a href="#enquiry" onClick={() => handleNavigation("enquiry")}>
              Enquiry
            </a>
          </li>
          <li className={activeSection === "about" ? "active" : ""}>
            <a href="#about" onClick={() => handleNavigation("about")}>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
