import React, { useState } from "react";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";

const NavLinks = () => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const handleDropdownStatus = () => {
    setDropdownStatus(!dropdownStatus);
  };
  return (
    <ul className="main-nav__navigation-box">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Projects
        </ScrollLink>
      </li>
      <li className="dropdown">
        <Link to="/blog">Blogs</Link>
        <i
          className="fa fa-angle-down"
          onKeyDown={handleDropdownStatus}
          role="button"
          tabIndex="0"
          aria-label="dropdown toggler"
          onClick={handleDropdownStatus}
        ></i>
        <ul className={dropdownStatus === true ? "active" : null}>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/blog-post">News</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
