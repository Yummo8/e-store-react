import React from 'react';
import { clsx } from 'clsx';

import { ChevronRightFilled } from '../../../assets/img/general';

const PrevBtn = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button
      {...props}
      className={clsx('slider__button prev-btn', {
        'slick-disabled': currentSlide === 0,
      })}
    >
      <span className="slider__button-icon">
        <ChevronRightFilled color="#049AF8" />
      </span>
    </button>
  );
};

export default PrevBtn;
