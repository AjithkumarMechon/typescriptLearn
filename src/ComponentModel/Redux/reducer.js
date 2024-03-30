import { combineReducers } from "redux";
import { ProductsSlice } from "./slice";

export const rootreducer = combineReducers({
  Products: ProductsSlice.reducer,
});
