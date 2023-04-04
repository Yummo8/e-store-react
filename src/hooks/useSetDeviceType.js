import React from 'react';
import { useDispatch } from 'react-redux';

import { setDeviceType } from '../redux/slices/deviceSlice';

export const useSetDeviceType = () => {
  const dispatch = useDispatch();

  const handleWindowSizeChange = () => {
    dispatch(setDeviceType(window.innerWidth));
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
};
