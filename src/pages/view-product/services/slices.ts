import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductData, ViewProduct } from "./types";

export const ProductDataInitialState: ViewProduct = {
  productData: {
    id: 0,
    title: "",
    description: "string",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
};

export const ProductDataSlice = createSlice({
  name: "product-data",
  initialState: ProductDataInitialState,
  reducers: {
    setProductData: (
      state: ViewProduct,
      action: PayloadAction<ProductData>
    ) => {
      state.productData = action.payload;
    },
  },
});

export const { setProductData } = ProductDataSlice.actions;

export default ProductDataSlice.reducer;
