import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleCart } from '../../../../redux/slices/cartSlice';

import { ShoppingCartFilled } from '../../../../assets/img/general';

export const CartButton = ({ iconWidth, iconHeight, item, inCart }) => {
  const dispatch = useDispatch();

  const handleCartBtnToggle = () => {
    const newCartItem = {
      id: item._id,
      category_id: item.category_id,
      img: item.img,
      title: item.title,
      price: item.price,
      state: item.state,
      color: item.colors[0].color,
    };

    dispatch(toggleCart(newCartItem));
  };

  return (
    <button
      type="button"
      className={inCart ? 'add-to-cart__button in-cart' : 'add-to-cart__button'}
      onClick={handleCartBtnToggle}
    >
      <span className="add-to-cart__button-icon">
        <ShoppingCartFilled width={iconWidth} height={iconHeight} color="#FFFFFF" />
      </span>
    </button>
  );
};
