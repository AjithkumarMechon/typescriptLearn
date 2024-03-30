import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsData } from "./action";
const initialState = {
  loading: false,
  responseBody: [],
  error: null,
};

export const ProductsSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.error = null;
        state.responseBody = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});
