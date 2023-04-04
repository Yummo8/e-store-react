import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/General';

export const WithFooter = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
