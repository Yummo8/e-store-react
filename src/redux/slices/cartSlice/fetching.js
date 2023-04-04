import { createAsyncThunk } from '@reduxjs/toolkit';

import { protectedApi } from '../../../api';

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await protectedApi.get('/api/cart');

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const setCart = createAsyncThunk('cart/setCart', async (cart) => {
  try {
    await protectedApi.post('/api/cart', { cart });
  } catch (err) {
    console.log(err);
  }
});
