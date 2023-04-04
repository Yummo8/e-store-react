import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

const NavLinks = ({ items, linksActive, device }) => {
  return (
    <div
      className={clsx('navbar-links', {
        'navbar-links-mobile': device.isTablet,
        active: linksActive,
      })}
    >
      <ul>
        {items.map((item, index) => (
          <li className="navbar-links__item" key={index}>
            <Link to={item.path}>
              <p className="navbar-links__item-text">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
