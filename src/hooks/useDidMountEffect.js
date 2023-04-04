import React from 'react';

export const useDidMountEffect = (func, dependencies) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, dependencies);
};
