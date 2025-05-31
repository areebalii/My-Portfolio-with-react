import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getNavLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#00C0FF" : ""
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <h1>Areeb</h1>
        </NavLink>
      </div>
      <ul className="navbar__link">
        <li>
          <NavLink style={getNavLinkStyle} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink style={getNavLinkStyle} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink style={getNavLinkStyle} to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink style={getNavLinkStyle} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}