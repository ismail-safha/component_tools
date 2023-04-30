import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => {
    setClick(false);
    console.log("event Closed");
  };

  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink
            //  exact
            to="/"
            className="nav-logo"
          >
            logo
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                // exact
                to="/"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/about"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/blog"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
