import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from "../common/constants/paths";
import AddProduct from "../pages/add-product";
import ProductListing from "../pages/product-list";
import ViewProduct from "../pages/view-product";

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.PRODUCT} element={<ProductListing />} />
        <Route path={Paths.VIEW_PRODUCT} element={<ViewProduct />} />
        <Route path={Paths.ADD_PRODUCT} element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesManager;
