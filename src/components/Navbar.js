import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <span className="navbar__logo">Photosnap</span>
      <div className="navbar__navigation-container">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-item">
            <NavLink to="/" className="navbar__navigation-link">
              Home
            </NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink to="/features" className="navbar__navigation-link">
              Stories
            </NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink to="/pricing" className="navbar__navigation-link">
              Prcing
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="navbar__label">
        <a href="#" className="navbar__lable-link">
          Get an invite
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
