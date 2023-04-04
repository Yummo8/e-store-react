import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories, fetchSelectedProduct, fetchSimilarProducts } from './fetching';

const initialState = {
  categories: {
    data: null,
    status: 'loading',
  },
  selectedProduct: {
    data: null,
    status: 'loading',
  },
  similarProducts: {
    data: null,
    status: 'loading',
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.categories.data = null;
      state.categories.status = 'loading';
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.categories.data = payload;
      state.categories.status = 'success';
    },
    [fetchCategories.rejected]: (state, { payload }) => {
      state.categories.data = payload;
      state.categories.status = 'error';
    },
    [fetchSelectedProduct.pending]: (state) => {
      state.selectedProduct.data = null;
      state.selectedProduct.status = 'loading';
    },
    [fetchSelectedProduct.fulfilled]: (state, { payload }) => {
      state.selectedProduct.data = payload;
      state.selectedProduct.status = 'success';
    },
    [fetchSelectedProduct.rejected]: (state, { payload }) => {
      state.selectedProduct.data = payload;
      state.selectedProduct.status = 'error';
    },
    [fetchSimilarProducts.pending]: (state) => {
      state.similarProducts.data = null;
      state.similarProducts.status = 'loading';
    },
    [fetchSimilarProducts.fulfilled]: (state, { payload }) => {
      state.similarProducts.data = payload;
      state.similarProducts.status = 'success';
    },
    [fetchSimilarProducts.rejected]: (state, { payload }) => {
      state.similarProducts.data = payload;
      state.similarProducts.status = 'error';
    },
  },
});

export const selectProductsData = ({ product }) => product;

export default productSlice.reducer;
