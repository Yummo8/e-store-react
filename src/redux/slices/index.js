import { combineReducers } from 'redux';

import deviceSlice from './deviceSlice';
import authSlice from './authSlice';
import userSlice from './userSlice';
import orderSlice from './orderSlice';
import cartSlice from './cartSlice';
import wishlistSlice from './wishlistSlice';
import productSlice from './productSlice';

const reducers = combineReducers({
  device: deviceSlice,
  auth: authSlice,
  user: userSlice,
  cart: cartSlice,
  order: orderSlice,
  wishlist: wishlistSlice,
  product: productSlice,
});

export default reducers;
