const Navbar = () => {
  return (
    <nav className="navbar__container">
      <span className="navbar__logo">Photosnap</span>
      <div className="navbar__navigation-container">
        <ul className="navbar__navigation-list">
          <li className="navbar__navigation-item">
            <a href="#" className="navbar__navigation-link">
              Stories
            </a>
          </li>
          <li className="navbar__navigation-item">
            <a href="#" className="navbar__navigation-link">
              Features
            </a>
          </li>
          <li className="navbar__navigation-item">
            <a href="#" className="navbar__navigation-link">
              Pricing
            </a>
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
