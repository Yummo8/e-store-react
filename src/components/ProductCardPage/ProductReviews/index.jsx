import React from 'react';

import { Rating } from '../../General/ui';
import { Button } from '@mui/material';

import Avatar1 from '../../../assets/img/product-card-page/avatar-1.png';
import Avatar2 from '../../../assets/img/product-card-page/avatar-2.png';

export const ProductReviews = () => {
  return (
    <div className="reviews-section__wrapper">
      <div className="reviews-list">
        <div className="reviews-list__item">
          <div className="item__top">
            <div className="user">
              <img className="user__avatar" src={Avatar1} alt="userAvatar" />
              <div className="review__info">
                <h5 className="username">Alice Thompson</h5>
                <p className="review__date">16 June 2022</p>
              </div>
            </div>
            <Rating starsCount={5} reviews={false} />
          </div>
          <div className="item__bottom">
            <p className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderi.
            </p>
          </div>
        </div>
        <div className="reviews-list__item">
          <div className="item__top">
            <div className="user">
              <img className="user__avatar" src={Avatar2} alt="userAvatar" />
              <div className="review__info">
                <h5 className="username">Otto Gray</h5>
                <p className="review__date">04 June 2022</p>
              </div>
            </div>
            <Rating starsCount={5} reviews={false} />
          </div>
          <div className="item__bottom">
            <p className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="reviews-list__item">
          <div className="item__top">
            <div className="user">
              <img className="user__avatar" src={Avatar1} alt="userAvatar" />
              <div className="review__info">
                <h5 className="username">Alice Thompson</h5>
                <p className="review__date">16 June 2022</p>
              </div>
            </div>
            <Rating starsCount={5} reviews={false} />
          </div>
          <div className="item__bottom">
            <p className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderi.
            </p>
          </div>
        </div>
      </div>
      <Button className="reviews-section__button" variant="contained">
        <p className="reviews-section__button-text">See all</p>
      </Button>
    </div>
  );
};
