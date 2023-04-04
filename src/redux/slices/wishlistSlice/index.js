import { createSlice } from '@reduxjs/toolkit';

import { getWishlist } from './fetching';

const initialState = {
  wishlist: {
    goods: [],
    quantity: 0,
  },
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, { payload }) => {
      const exist = state.wishlist.goods.find((item) => item === payload);

      if (exist) {
        state.wishlist.goods = state.wishlist.goods.filter((item) => item !== payload);
      } else {
        state.wishlist.goods.push(payload);
      }

      state.wishlist.quantity = state.wishlist.goods.length;
    },
    clearWishlist: (state) => {
      state.wishlist = initialState.wishlist;
    },
  },
  extraReducers: {
    [getWishlist.pending]: (state) => {
      state.wishlist = initialState.wishlist;
    },
    [getWishlist.fulfilled]: (state, { payload }) => {
      state.wishlist = payload;
    },
    [getWishlist.rejected]: (state) => {
      state.wishlist = initialState.wishlist;
    },
  },
});

export const selectWishlistData = ({ wishlist }) => wishlist;

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
