import React from 'react';
import { clsx } from 'clsx';

import { ChevronRightFilled } from '../../../assets/img/general';

const NextBtn = ({ currentSlide, slideCount, slidesToShow, ...props }) => {
  return (
    <button
      {...props}
      className={clsx('slider__button next-btn', {
        'slick-disabled': currentSlide === slideCount - slidesToShow,
      })}
    >
      <span className="slider__button-icon">
        <ChevronRightFilled color="#049AF8" />
      </span>
    </button>
  );
};

export default NextBtn;
