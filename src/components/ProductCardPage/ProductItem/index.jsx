import React from 'react';
import { Link } from 'react-router-dom';

import { useGetProducstInfo } from '../../../hooks';

import { ItemState, CartButton, ProductPrice } from '../../General/ui';

export const ProductItem = ({ item }) => {
  const { existInCart } = useGetProducstInfo(item._id);

  return (
    <div className="product-item">
      <ItemState state={item.state} />
      <Link to={`/product/${item._id}`} className="product-item__link">
        <img className="product__img" src={item.img} alt="productImg" />
      </Link>
      <Link to={`/product/${item._id}`} className="product-item__link">
        <p className="product__title">{item.title}</p>
      </Link>
      <ProductPrice price={item.price} />
      <CartButton iconWidth="24" iconHeight="24" item={item} inCart={existInCart} />
    </div>
  );
};
