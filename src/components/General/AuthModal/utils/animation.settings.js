export const modalAnimation = {
  onOpen: {
    initial: {
      translateY: '-1500px',
    },
    animate: {
      translateY: 0,
      transitionDuration: '.5s',
      transitionTimingFunction: 'ease-in-out',
    },
  },
  onClose: {
    exit: {
      translateY: '-500vh',
      transitionDuration: '.7s',
      transitionTimingFunction: 'ease',
    },
  },
};

export const formAnimation = {
  initial: {
    x: -200,
    visibility: 'hidden',
  },
  animate: {
    x: 0,
    visibility: 'visible',
  },
};
