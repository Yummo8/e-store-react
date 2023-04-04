import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTablet: window.innerWidth <= 834,
  isMobile: window.innerWidth <= 428,
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDeviceType: (state, { payload }) => {
      state.isTablet = payload <= 834;
      state.isMobile = payload <= 428;
    },
  },
});

export const selectDeviceData = ({ device }) => device;

export const { setDeviceType } = deviceSlice.actions;

export default deviceSlice.reducer;
