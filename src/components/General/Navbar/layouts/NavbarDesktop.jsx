import React from 'react';

import { MdOutlineClose } from 'react-icons/md';
import { MenuFilled } from '../../../../assets/img/general';

export const NavbarDesktop = ({ children, menuActive, onMenuToogle }) => {
  return (
    <>
      <button
        className={menuActive ? 'navbar__button active' : 'navbar__button'}
        onClick={onMenuToogle}
      >
        <div className="icons">
          <span className="navbar__button-icon close">
            <MenuFilled />
          </span>
          <span className="navbar__button-icon open">
            <MdOutlineClose />
          </span>
        </div>
        <p className="navbar__button-text">All Categories</p>
      </button>
      {children}
      <div className="navbar__offer">
        <p className="navbar__offer-text">New Offer: Sale up to 50% on Phone and TV</p>
      </div>
    </>
  );
};
