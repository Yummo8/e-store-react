import React from 'react';

import { disableScroll, enableScroll } from '../../../utils';
import { menuItems, navbarLinks } from '../../../utils/data';

import { NavbarDesktop, NavbarMobile } from './layouts';
import NavMenu from './NavMenu';
import NavLinks from './NavLinks';

export const Navbar = ({ linksActive, device }) => {
  const [menuActive, setMenuActive] = React.useState(false);

  React.useEffect(() => {
    linksActive ? disableScroll() : enableScroll();
  }, [linksActive]);

  const onMenuToogle = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        {!device.isTablet ? (
          <NavbarDesktop menuActive={menuActive} onMenuToogle={onMenuToogle}>
            <NavMenu menuActive={menuActive} device={device} items={menuItems} />
            <NavLinks device={device} items={navbarLinks} />
          </NavbarDesktop>
        ) : (
          <NavbarMobile>
            <NavMenu device={device} items={menuItems} />
            <NavLinks linksActive={linksActive} device={device} items={navbarLinks} />
          </NavbarMobile>
        )}
      </div>
    </nav>
  );
};
