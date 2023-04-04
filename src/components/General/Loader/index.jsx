import React from 'react';

export const Loader = ({ type }) => {
  return <div className={type === 'auth' ? 'auth-loader' : 'loader'} />;
};
