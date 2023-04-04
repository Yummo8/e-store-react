import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartData } from '../../redux/slices/cartSlice';
import { routes } from '../../utils';

import { SectionTitle } from '../../components/General';
import { CartList, CartOrderInfo } from '../../components/Cart';
import { Button } from '@mui/material';
import { Arrow } from '../../assets/img/general';
import emptyCart from '../../assets/img/cart/empty_cart.svg';

export const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(selectCartData);

  const onContinueBtnClick = () => {
    if (!cart.quantity) {
      return;
    }

    navigate(routes.payment, { replace: true });
  };

  return (
    <div className="container">
      {cart.quantity ? (
        <div className="cart__wrapper">
          <SectionTitle titleText="Shopping Cart" button={false} />
          <div className="cart__order">
            <CartList products={cart.goods} />
            <CartOrderInfo cart={cart} />
          </div>
          <Button
            className="cart-continue__button"
            variant="contained"
            endIcon={<Arrow color="#FFFFFF" />}
            onClick={onContinueBtnClick}
          >
            <p className="cart-continue__button-text">Continue</p>
          </Button>
        </div>
      ) : (
        <div className="emty-cart">
          <h1 className="emty-cart__title">Shopping cart is empty</h1>
          <p className="emty-cart__subtitle">
            Return to the
            <Link className="subtitle__link" to={routes.home}>
              {' homepage '}
            </Link>
            to fill your cart
          </p>
          <div className="emty-cart__img">
            <img src={emptyCart} alt="emptyCart" />
          </div>
        </div>
      )}
    </div>
  );
};
