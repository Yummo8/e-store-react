import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentType: 'mastercard',
};

const odrerSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setPaymentType: (state, { payload }) => {
      state.paymentType = payload;
    },
  },
});

export const selectOrderData = ({ order }) => order;

export const { setPaymentType } = odrerSlice.actions;

export default odrerSlice.reducer;
