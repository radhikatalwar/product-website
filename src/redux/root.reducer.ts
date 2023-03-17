import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global.slice";
import ProductSlice from "../pages/product-list/services/slices";
import ProductDataSlice from "../pages/view-product/services/slices";

const rootReducer = combineReducers({
  globalcontent: globalSlice,
  products: ProductSlice,
  productData: ProductDataSlice,
});

export default rootReducer;
