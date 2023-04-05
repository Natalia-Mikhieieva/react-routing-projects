import { Link, NavLink } from "react-router-dom"; // <== IMPOR

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Projects
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
