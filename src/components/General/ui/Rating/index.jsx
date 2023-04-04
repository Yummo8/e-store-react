import React from 'react';

import { StarOutlined } from '../../../../assets/img/general';

export const Rating = ({ starsCount, reviewsCount, reviews }) => {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(5)].map((_, index) =>
          index < starsCount ? (
            <StarOutlined key={index} color="#FFBF43" />
          ) : (
            <StarOutlined key={index} />
          )
        )}
      </div>
      {reviews && <p className="reviews">({reviewsCount})</p>}
    </div>
  );
};
