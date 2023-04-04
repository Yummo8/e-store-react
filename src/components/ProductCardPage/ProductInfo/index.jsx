import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../../redux/slices/cartSlice';
import { useGetProducstInfo } from '../../../hooks';

import ColorPicker from './ColorPicker';
import { Rating, LikeButton, ProductPrice, QuantityButtons } from '../../General/ui';
import { Button } from '@mui/material';
import { Arrow } from '../../../assets/img/general';

export const ProductInfo = ({ item }) => {
  const dispatch = useDispatch();
  const { existInWishlist } = useGetProducstInfo(item._id);

  const [selectedColorId, setSelectedColorId] = React.useState(1);
  const [count, setCount] = React.useState(1);

  const handleAddToCart = () => {
    const newCartItem = {
      id: item._id,
      category_id: item.category_id,
      img: item.img,
      title: item.title,
      price: item.price,
      state: item.state,
      color: item.colors[selectedColorId - 1].color,
      quantity: count,
    };

    dispatch(addToCart(newCartItem));
  };

  const handleColorChange = (id) => () => {
    setSelectedColorId(id);
  };

  return (
    <div className="product-card__info">
      <h3 className="product-title">{item.title}</h3>
      <div className="product-title__bottom">
        <ProductPrice price={item.price} />
        <Rating
          starsCount={item.rating_stars}
          reviewsCount={item.reviews}
          reviews={true}
        />
        <LikeButton id={item._id} inWishlist={existInWishlist} />
      </div>
      <div className="product-details">
        <div className="product-details__title">
          <p className="product-details__title-text">Details</p>
        </div>
        <div className="product-details__list">
          <ul>
            {item.details.map((item, index) => (
              <li className="details-list__item" key={index}>
                <p className="details-list__item-text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="product-color-palette">
        <div className="product-color-palette__title">
          <p className="product-color-palette__title-text">Color Palette</p>
          <p className="product-color-palette__title-text">Quantity</p>
        </div>
        <div className="product-color-palette__bottom">
          <ColorPicker
            colors={item.colors}
            currentId={selectedColorId}
            onColorBtnClick={handleColorChange}
          />
          <QuantityButtons setCount={setCount}>{count}</QuantityButtons>
        </div>
      </div>
      <Button
        className="product-add-to-cart__button"
        variant="contained"
        endIcon={<Arrow color="#FFFFFF" />}
        onClick={handleAddToCart}
      >
        <p className="product-add-to-cart__button-text">Add to cart</p>
      </Button>
    </div>
  );
};
