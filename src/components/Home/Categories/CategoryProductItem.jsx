import React from 'react';
import { Link } from 'react-router-dom';

import { useGetProducstInfo } from '../../../hooks';

import {
  ItemState,
  LikeButton,
  Rating,
  CartButton,
  ProductPrice,
} from '../../../components/General/ui';

const CategoryProductItem = ({ item }) => {
  const { existInCart } = useGetProducstInfo(item._id);
  const { existInWishlist } = useGetProducstInfo(item._id);

  return (
    <div className="categories-list__product">
      <div className="item__top">
        <ItemState state={item.state} />
        <LikeButton id={item._id} inWishlist={existInWishlist} />
        <Link to={`product/${item._id}`} className="item__link">
          <img className="product__img" src={item.img} alt="productPhoto" />
        </Link>
      </div>
      <div className="item__bottom">
        <Link to={`product/${item._id}`} className="item__link">
          <p className="product__title">{item.title}</p>
        </Link>
        <Rating
          starsCount={item.rating_stars}
          reviewsCount={item.reviews}
          reviews={true}
        />
        <ProductPrice price={item.price} />
        <CartButton iconWidth="28" iconHeight="28" item={item} inCart={existInCart} />
      </div>
    </div>
  );
};

export default CategoryProductItem;
