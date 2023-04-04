import React from 'react';

import CartItem from './CartItem';

export const CartList = ({ products }) => {
  return (
    <div className="cart-list">
      {products.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}
    </div>
  );
};
