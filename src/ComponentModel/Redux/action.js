import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "./http";
import { productsUrl } from "./api";

export const fetchProductsData = createAsyncThunk(
  "products",
  async (_, thunkAPI) => {
    try {
      const res = await http.doGet(productsUrl);
      return res.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
