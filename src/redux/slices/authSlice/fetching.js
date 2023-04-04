import { createAsyncThunk } from '@reduxjs/toolkit';

import { setAuth } from '.';
import { setUser } from '../userSlice';
import { clearWishlist } from '../wishlistSlice';

import authService from '../../../services/auth.service';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const { data, headers } = await authService.signUp(values);

      dispatch(setUser(data.user));
      localStorage.setItem('token', headers.authorization);
      localStorage.setItem('user', JSON.stringify(data.user));

      return true;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (values, { dispatch, rejectWithValue }) => {
    try {
      const { data, headers } = await authService.signIn(values);

      console.log(headers.authorization);
      dispatch(setUser(data.user));
      localStorage.setItem('token', headers.authorization);
      localStorage.setItem('user', JSON.stringify(data.user));

      return true;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  try {
    await authService.logout();

    dispatch(setAuth(false));
    dispatch(setUser(null));
    dispatch(clearWishlist());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (err) {
    console.log(err);
  }
});

export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await authService.checkAuth();

      return true;
    } catch (err) {
      console.clear();

      dispatch(setUser(null));
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      return rejectWithValue(false);
    }
  }
);
