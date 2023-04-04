import React from 'react';

import { formatPriceText } from '../../../../utils/formatPriceText';

export const ProductPrice = ({ price, quantity }) => {
  return (
    <div className="product__price">
      {price.current ? (
        <p className="product__price-current">
          {formatPriceText(price.current, quantity)}
        </p>
      ) : (
        <>
          <p className="product__price-old">{formatPriceText(price.old, quantity)}</p>
          <p className="product__price-new">{formatPriceText(price.new, quantity)}</p>
        </>
      )}
    </div>
  );
};
