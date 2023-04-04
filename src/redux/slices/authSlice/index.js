import { createSlice } from '@reduxjs/toolkit';

import { signUp, signIn, checkAuth } from './fetching';

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.isAuth = false;
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.isAuth = payload;
    },
    [signUp.rejected]: (state) => {
      state.isAuth = false;
    },
    [signIn.pending]: (state) => {
      state.isAuth = false;
    },
    [signIn.fulfilled]: (state, { payload }) => {
      state.isAuth = payload;
    },
    [signIn.rejected]: (state) => {
      state.isAuth = false;
    },
    [checkAuth.fulfilled]: (state, { payload }) => {
      state.isAuth = payload;
    },
    [checkAuth.rejected]: (state, { payload }) => {
      state.isAuth = payload;
    },
  },
});

export const selectAuthData = ({ auth }) => auth;

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
