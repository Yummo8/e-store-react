import { createSlice } from '@reduxjs/toolkit';

const getUser = () => {
  const user = localStorage.getItem('user');

  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: getUser(),
  footerEmail: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setFooterEmail: (state, { payload }) => {
      state.footerEmail = payload;
    },
  },
});

export const selectUserData = ({ user }) => user;

export const { setUser, setFooterEmail } = userSlice.actions;

export default userSlice.reducer;
