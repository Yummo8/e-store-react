import PrevBtn from '../PrevBtn';
import NextBtn from '../NextBtn';

export const settings = {
  categories: {
    dots: false,
    infinite: false,
    speed: 200,
    arrows: false,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 835,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 621,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 429,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 361,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  },
  promotions: {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 401,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
        },
      },
    ],
  },
  navbar: {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
  },
  images: {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn slidesToShow={1} />,
    responsive: [
      {
        breakpoint: 429,
        settings: {
          arrows: false,
        },
      },
    ],
  },
  products: {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    arrows: true,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn slidesToShow={4} />,
    responsive: [
      {
        breakpoint: 1471,
        settings: {
          slidesToShow: 3.5,
          nextArrow: <NextBtn slidesToShow={3.5} />,
        },
      },
      {
        breakpoint: 1321,
        settings: {
          slidesToShow: 3,
          nextArrow: <NextBtn slidesToShow={3} />,
        },
      },
      {
        breakpoint: 1101,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 981,
        settings: {
          arrows: false,
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 835,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 581,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 429,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
        },
      },
    ],
  },
};
