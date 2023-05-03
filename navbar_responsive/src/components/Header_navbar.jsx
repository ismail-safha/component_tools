import { useState } from "react";
import "./Header_navbar.css";
import { NavLink } from "react-router-dom";

const Header_navbar = () => {
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
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque
        enim aliquid tempora fuga tempore nihil, numquam, nemo incidunt nam eum
        soluta ipsum et blanditiis nisi ab placeat repellat dolores harum
        laudantium quia molestias suscipit eligendi inventore? Eos praesentium
        saepe quam, error, ea illum incidunt rerum quis minus eveniet officiis
        amet eaque in est excepturi eum, aut inventore quisquam eligendi
        corrupti. Neque corporis perferendis inventore autem ullam reiciendis
        vitae, obcaecati ea exercitationem laboriosam veritatis earum hic
        mollitia assumenda sequi! Id amet at dolore iste nihil, in repudiandae?
        Dolorem laborum aut voluptate ea error aperiam eius in veritatis?
        Officiis, recusandae debitis!
      </div>
    </>
  );
};

export default Header_navbar;
