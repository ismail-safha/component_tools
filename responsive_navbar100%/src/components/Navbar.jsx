import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    let handleer = () => {
      setShowNavbar(false);
    };
    document.addEventListener("mousedown", handleer);
  });
  return (
    <div className="header">
      <div className={`overlay ${showNavbar && "active"}`}></div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">logo</div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? "xxx" : "O"}
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul>
              <li>
                <Link className="" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="" to="/">
                  Blog
                </Link>
              </li>

              <li>
                <Link className="" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
