import { createSelector } from "@reduxjs/toolkit";

const stateData = (state) => state.Products;
export const ProductSelector = createSelector(
  stateData,
  (substate) => substate.responseBody
);
