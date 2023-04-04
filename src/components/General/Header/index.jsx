import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../../redux/slices/authSlice/fetching';
import { selectCartData } from '../../../redux/slices/cartSlice';
import { selectWishlistData } from '../../../redux/slices/wishlistSlice';
import { routes } from '../../../utils/routes';

import {
  LogoSvg,
  PhoneSvg,
  SearchOutlinedSvg,
  AccountCircleOutlined,
  FavoriteFilled,
  ShoppingCartFilled,
} from '../../../assets/img/general';

export const Header = ({ linksActive, setLinksActive, isAuth }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(selectCartData);
  const { wishlist } = useSelector(selectWishlistData);

  const onLinksMenuClick = () => {
    setLinksActive((prev) => !prev);
  };

  const handleLogout = async () => {
    if (!isAuth) {
      return;
    }

    try {
      await dispatch(logout()).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div
          className={linksActive ? 'menu__links active' : 'menu__links'}
          onClick={onLinksMenuClick}
        >
          <span className="menu__links-icon" />
        </div>
        <Link to={routes.home} className="header-logo__link">
          <div className="header__logo">
            <h1 className="header__logo-text">Elekta Store</h1>
            <span className="header__logo-icon">
              <LogoSvg />
            </span>
          </div>
        </Link>
        <div className="header__phone">
          <span className="header__phone-icon">
            <PhoneSvg />
          </span>
          <p className="header__phone-text">+1-642-969-4748</p>
        </div>
        <div className="header__search">
          <span className="header__search-icon">
            <SearchOutlinedSvg />
          </span>
          <input type="text" placeholder="Search..." className="header__search-input" />
        </div>
        <div className="header-links">
          <Link
            to={!isAuth ? routes.signIn : ''}
            className="header-links__item profile"
            onClick={handleLogout}
          >
            <span className="header-links__item-icon">
              <AccountCircleOutlined />
            </span>
          </Link>
          <Link to={!isAuth ? routes.signIn : ''} className="header-links__item favorite">
            <span className="header-links__item-icon">
              <FavoriteFilled />
            </span>
            {wishlist.quantity > 0 && (
              <span className="badge favorite-badge">
                <p className="badge-text">{wishlist.quantity}</p>
              </span>
            )}
          </Link>
          <Link to={routes.cart} className="header-links__item cart">
            <span className="header-links__item-icon">
              <ShoppingCartFilled />
            </span>
            {cart.quantity > 0 && (
              <span className="badge cart-badge">
                <p className="badge-text">{cart.quantity}</p>
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
