import { createAsyncThunk } from '@reduxjs/toolkit';

import { protectedApi } from '../../../api';
import { routes } from '../../../utils';

export const getWishlist = createAsyncThunk(
  'wishlist/getWishlist',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await protectedApi.get('/api/wishlist');

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const setWishlist = createAsyncThunk('wishlist/setWishlist', async (wishlist) => {
  try {
    await protectedApi.post('/api/wishlist', { wishlist });
  } catch (err) {
    window.location.replace(routes.home);
  }
});
