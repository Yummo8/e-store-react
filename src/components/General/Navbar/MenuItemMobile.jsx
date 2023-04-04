import React from 'react';
import { Link } from 'react-router-dom';

const MenuItemMobile = ({ icon, title, path }) => {
  return (
    <div className="navbar-menu__item">
      <Link to={path} className="navbar-menu__link">
        <span className="navbar-menu__item-icon">{icon}</span>
        <p className="navbar-menu__item-title">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItemMobile;
