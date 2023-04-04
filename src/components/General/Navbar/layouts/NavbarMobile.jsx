import React from 'react';

import { SearchOutlinedSvg } from '../../../../assets/img/general';

export const NavbarMobile = ({ children }) => {
  return (
    <>
      {children}
      <div className="navbar__search">
        <span className="navbar__search-icon">
          <SearchOutlinedSvg />
        </span>
        <input type="text" placeholder="Search..." className="navbar__search-input" />
      </div>
    </>
  );
};
