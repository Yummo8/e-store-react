import { createAsyncThunk } from '@reduxjs/toolkit';

import { clearCart } from '../cartSlice';
import { protectedApi } from '../../../api';

export const checkout = createAsyncThunk(
  'order/checkout',
  async (order, { dispatch }) => {
    try {
      const { data } = await protectedApi.post('/api/orders/checkout', { order });

      if (typeof data !== 'string') {
        localStorage.setItem('user', JSON.stringify(data));
      }

      dispatch(clearCart());
    } catch (err) {
      console.log(err);
    }
  }
);
