import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/dirty-dan">
          <li>Dirty Dan</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
