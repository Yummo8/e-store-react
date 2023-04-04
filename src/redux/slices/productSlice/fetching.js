import { createAsyncThunk } from '@reduxjs/toolkit';

import { setSelectedProduct } from '.';

import { api } from '../../../api';

export const fetchCategories = createAsyncThunk(
  'products/setCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/categories');

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

export const fetchSelectedProduct = createAsyncThunk(
  'products/setSelectedProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/products/${id}`);

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);

export const fetchSimilarProducts = createAsyncThunk(
  'products/setSimilarProducts',
  async (category_id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/products/similar/${category_id}`);

      return data;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);
