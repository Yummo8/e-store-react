import React from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname.includes('sign')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};
