import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductList, ProductQueryParameter, Products } from "./types";

export const ProductInitialState: ProductList = {
  productList: { products: [], total: 0, skip: 0, limit: 0 },
  productQueryParameters: { search: "" },
};

export const ProductSlice = createSlice({
  name: "product",
  initialState: ProductInitialState,
  reducers: {
    setProducts: (state: ProductList, action: PayloadAction<Products>) => {
      state.productList = action.payload;
    },
    setProductQueryParameter: (
      state: ProductList,
      action: PayloadAction<ProductQueryParameter>
    ) => {
      state.productQueryParameters = action.payload;
    },
  },
});

export const { setProducts, setProductQueryParameter } = ProductSlice.actions;

export default ProductSlice.reducer;
