// BarreNavigation.js
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";
import '../styles/BarreNavigation.css';

const BarreNavigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <nav className="BarreNavigation">
      <NavLink to="/Accueil" activeClassName="active" exact>
        Accueil
      </NavLink>
      <NavLink to="/Cours" activeClassName="active">
        Cours
      </NavLink>
      <NavLink to="/Professeurs" activeClassName="active">
        Professeurs
      </NavLink>
      {isMobile && (
        <button className="btn-drawer" onClick={toggleDrawer}>
          ☰
        </button>
      )}
      {isMobile && drawerOpen && (
        <div className="drawer">
          <Link to="/Accueil" onClick={toggleDrawer}>
            Accueil
          </Link>
          <Link to="/Cours" onClick={toggleDrawer}>
            Cours
          </Link>
          <Link to="/Professeurs" onClick={toggleDrawer}>
            Professeurs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default BarreNavigation;
