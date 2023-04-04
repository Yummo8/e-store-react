import { createSlice } from '@reduxjs/toolkit';

import { getCart } from './fetching';

const initialState = {
  cart: {
    goods: [],
    totalPrice: {
      old: 0,
      current: 0,
    },
    quantity: 0,
  },
};

const updateQuantity = (goods) => {
  return goods.reduce((acc, item) => acc + item.quantity, 0);
};

const updateTotalPrice = (goods) => {
  const price = {
    old: 0,
    current: 0,
  };

  goods.forEach((item) => {
    if (item.price.current) {
      price.old += Number(item.price.current) * item.quantity;
      price.current += Number(item.price.current) * item.quantity;
    } else {
      price.old += Number(item.price.old) * item.quantity;
      price.current += Number(item.price.new) * item.quantity;
    }
  });

  return price;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const exist = state.cart.goods.find((item) => item.id === payload.id);

      if (exist) {
        exist.quantity += payload.quantity;
      } else {
        state.cart.goods.push({ ...payload });
      }

      state.cart.totalPrice = updateTotalPrice(state.cart.goods);
      state.cart.quantity = updateQuantity(state.cart.goods);
    },
    setItemQuantity: (state, { payload }) => {
      const exist = state.cart.goods.find((item) => item.id === payload.id);

      exist.quantity = payload.quantity;

      state.cart.totalPrice = updateTotalPrice(state.cart.goods);
      state.cart.quantity = updateQuantity(state.cart.goods);
    },
    toggleCart: (state, { payload }) => {
      const exist = state.cart.goods.find((item) => item.id === payload.id);

      if (exist) {
        state.cart.goods = state.cart.goods.filter((item) => item.id !== payload.id);
      } else {
        state.cart.goods.push({ ...payload, quantity: 1 });
      }

      state.cart.totalPrice = updateTotalPrice(state.cart.goods);
      state.cart.quantity = updateQuantity(state.cart.goods);
    },
    removeFromCart: (state, { payload }) => {
      state.cart.goods = state.cart.goods.filter((item) => item.id !== payload);

      state.cart.totalPrice = updateTotalPrice(state.cart.goods);
      state.cart.quantity = updateQuantity(state.cart.goods);
    },
    clearCart: (state) => {
      state.cart = initialState.cart;
    },
  },
  extraReducers: {
    [getCart.pending]: (state) => {
      state.cart = initialState.cart;
    },
    [getCart.fulfilled]: (state, { payload }) => {
      state.cart = payload;
    },
    [getCart.rejected]: (state) => {
      state.cart = initialState.cart;
    },
  },
});

export const selectCartData = ({ cart }) => cart;

export const { addToCart, toggleCart, setItemQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
