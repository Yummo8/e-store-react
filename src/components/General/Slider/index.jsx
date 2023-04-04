import React from 'react';

import { settings } from './utils/slider.settings';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CustomSlider = ({ type, children }) => {
  switch (type) {
    case 'navbar':
      return <Slider {...settings.navbar}>{children}</Slider>;
    case 'categories':
      return <Slider {...settings.categories}>{children}</Slider>;
    case 'promotions':
      return <Slider {...settings.promotions}>{children}</Slider>;
    case 'images':
      return <Slider {...settings.images}>{children}</Slider>;
    default:
      return <Slider {...settings.products}>{children}</Slider>;
  }
};
