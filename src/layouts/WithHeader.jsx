import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { checkAuth } from '../redux/slices/authSlice/fetching';
import { getCart, setCart } from '../redux/slices/cartSlice/fetching';
import { getWishlist, setWishlist } from '../redux/slices/wishlistSlice/fetching';
import { selectCartData } from '../redux/slices/cartSlice';
import { selectWishlistData } from '../redux/slices/wishlistSlice';
import { useDidMountEffect, useDebounce } from '../hooks';

import { Header, Navbar } from '../components/General';

export const WithHeader = ({ device, isAuth }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(selectCartData);
  const { wishlist } = useSelector(selectWishlistData);

  const [linksActive, setLinksActive] = React.useState(false);

  const debouncedCart = useDebounce(cart, 500);
  const debouncedWishlist = useDebounce(wishlist, 500);

  React.useEffect(() => {
    const onAppStart = () => {
      dispatch(checkAuth());
      dispatch(getCart());
    };

    onAppStart();
  }, []);

  React.useEffect(() => {
    isAuth && dispatch(getWishlist());
  }, [isAuth]);

  useDidMountEffect(() => {
    dispatch(setCart(debouncedCart));
  }, [debouncedCart]);

  useDidMountEffect(() => {
    isAuth && dispatch(setWishlist(debouncedWishlist));
  }, [debouncedWishlist]);

  return (
    <>
      <Header linksActive={linksActive} setLinksActive={setLinksActive} isAuth={isAuth} />
      <Navbar device={device} linksActive={linksActive} />
      <Outlet />
    </>
  );
};
