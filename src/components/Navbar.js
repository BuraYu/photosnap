import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar__container">
      <span className="navbar__logo">Photosnap</span>
      <div className="navbar__navigation-container">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink to="/features">Stories</NavLink>
          </li>
          <li className="navbar__navigation-item">
            <NavLink to="/pricing">Prcing</NavLink>
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
