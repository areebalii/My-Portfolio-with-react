import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "#00C0FF" : ""
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMenuCloseOnClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <h1 className="logo-text">Areeb</h1>
        </NavLink>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaRegWindowClose /> : <GiHamburgerMenu />}
      </button>

      <ul className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink onClick={handleMenuCloseOnClick} style={getNavLinkStyle} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={handleMenuCloseOnClick} style={getNavLinkStyle} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={handleMenuCloseOnClick} style={getNavLinkStyle} to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={handleMenuCloseOnClick} style={getNavLinkStyle} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};