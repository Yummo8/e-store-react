import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartData } from '../redux/slices/cartSlice';
import { selectWishlistData } from '../redux/slices/wishlistSlice';

export const useGetProducstInfo = (id) => {
  const { cart } = useSelector(selectCartData);
  const { wishlist } = useSelector(selectWishlistData);

  const [existInCart, setExistInCart] = React.useState(false);
  const [existInWishlist, setExistInWishlist] = React.useState(false);
  const [itemsWithSale, setItemsWithSale] = React.useState(false);

  React.useEffect(() => {
    const exist = cart.goods.find((item) => item.id === id);

    if (exist) {
      setExistInCart(true);
    } else {
      setExistInCart(false);
    }
  }, [cart]);

  React.useEffect(() => {
    const exist = cart.goods.some((item) => item.price.old);

    exist ? setItemsWithSale(true) : setItemsWithSale(false);
  }, [cart]);

  React.useEffect(() => {
    const exist = wishlist.goods.includes(id);

    exist ? setExistInWishlist(true) : setExistInWishlist(false);
  }, [wishlist]);

  return { existInCart, existInWishlist, itemsWithSale };
};
