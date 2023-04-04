import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkout } from '../../../redux/slices/orderSlice/fetching';
import { formatPriceText } from '../../../utils';
import { routes } from '../../../utils/routes';

import { Button } from '@mui/material';
import { Arrow } from '../../../assets/img/general';

export const TotalOrderInfo = ({ cart, paymentType, handleSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    return handleSubmit(async (data) => {
      const order = {
        goods: cart.goods,
        price: cart.totalPrice.current,
        quantity: cart.quantity,
        contacts: {
          firstName: data.firstName,
          lastName: data.lastName,
          city: data.city,
          postcode: data.postcode,
          address: data.address,
          email: data.email,
        },
        paymentType,
      };

      await dispatch(checkout(order)).unwrap();

      navigate(routes.cart, { replace: true });
    });
  };

  return (
    <div className="total-order-info">
      <div className="total-order-info__title">
        <p className="total-order-info__title-text">Your Order</p>
      </div>
      <div className="order__top">
        <div className="order-cost">
          <p className="order-cost__title">Cost</p>
          <p className="order-cost__text">{formatPriceText(cart.totalPrice.current)}</p>
        </div>
        <div className="order-delivery">
          <p className="order-delivery__title">Delivery</p>
          <p className="order-delivery__text">Free</p>
        </div>
        <div className="order-discount">
          <p className="order-discount__title">Discount</p>
          <p className="order-discount__text">$0</p>
        </div>
        <div className="order-promocode">
          <p className="order-promocode__title">Promocode</p>
          <p className="order-promocode__text">$0</p>
        </div>
      </div>
      <div className="order__bottom">
        <h4 className="total-price__title">Total Price:</h4>
        <p className="total-price__price">{formatPriceText(cart.totalPrice.current)}</p>
      </div>
      <Button
        className="order-buy__button"
        variant="contained"
        endIcon={<Arrow color="#FFFFFF" />}
        onClick={handleCheckout()}
      >
        <p className="order-buy__button-text">Buy</p>
      </Button>
    </div>
  );
};
