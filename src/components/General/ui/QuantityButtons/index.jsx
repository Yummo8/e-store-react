import React from 'react';

import { QuantityMinus, QuantityPlus } from '../../../../assets/img/general';

export const QuantityButtons = ({ children, setCount }) => {
  const handleIncrement = () => {
    setCount((prev) => ++prev);
  };

  const handleDecrement = () => {
    if (children <= 1) {
      return;
    }

    setCount((prev) => --prev);
  };

  return (
    <div className="quantity-buttons">
      <button
        type="button"
        className={
          children > 1 ? 'quantity-buttons__button' : 'quantity-buttons__button disable'
        }
        disabled={children > 1 ? false : true}
        onClick={handleDecrement}
      >
        <span className="quantity-buttons__button-icon">
          <QuantityMinus disabled={children > 1 ? false : true} />
        </span>
      </button>
      <p className="quantity-buttons__qty">{children}</p>
      <button
        type="button"
        className="quantity-buttons__button"
        onClick={handleIncrement}
      >
        <span className="quantity-buttons__button-icon">
          <QuantityPlus />
        </span>
      </button>
    </div>
  );
};
