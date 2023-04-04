import React from 'react';

import { useGetProducstInfo } from '../../../hooks/useGetProducstInfo';
import { formatPriceText } from '../../../utils/formatPriceText';

export const CartOrderInfo = ({ cart }) => {
  const { itemsWithSale } = useGetProducstInfo();

  const formatCountText = (count) => {
    return count > 1 ? `${count} Items` : `${count} Item`;
  };

  return (
    <div className="cart-order-info">
      <div className="cart-order-info__title">
        <p className="cart-order-info__title-text">Your Order</p>
      </div>
      <div className="order__top">
        <p className="order__items-count">{formatCountText(cart.quantity)}</p>
        <p className="order__price-current">{formatPriceText(cart.totalPrice.current)}</p>
      </div>
      <div className="order__bottom">
        <div className="total-price__title">
          <p className="total-price__title-text">Total Price:</p>
        </div>
        <div className="total-price__price">
          {itemsWithSale && (
            <p className="order__price-old">{formatPriceText(cart.totalPrice.old)}</p>
          )}
          <p className="order__price-new">{formatPriceText(cart.totalPrice.current)}</p>
        </div>
      </div>
    </div>
  );
};
