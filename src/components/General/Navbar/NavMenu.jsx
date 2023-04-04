import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

import MenuItemMobile from './MenuItemMobile';
import { CustomSlider } from '../Slider';
import { ChevronRightFilled } from '../../../assets/img/general';

const NavMenu = ({ items, menuActive, device }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={clsx('navbar-menu', {
        'navbar-menu-tablet': device.isTablet && !device.isMobile,
        'navbar-menu-mobile': device.isMobile,
        active: menuActive,
        'active-mobile': device.isTablet && pathname === '/',
      })}
    >
      {!device.isMobile ? (
        <ul>
          {items.map((item, index) => (
            <Link to={item.path} className="navbar-menu__link" key={index}>
              <li className="navbar-menu__item">
                <span className="navbar-menu__item-icon">{item.icon}</span>
                <p className="navbar-menu__item-text">{item.title}</p>
                <span className="chevron">
                  <ChevronRightFilled />
                </span>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <>
          {pathname === '/' && (
            <div className="slider__wrapper">
              <CustomSlider type="navbar">
                {items.map((item, index) => (
                  <MenuItemMobile key={index} {...item} />
                ))}
              </CustomSlider>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavMenu;
