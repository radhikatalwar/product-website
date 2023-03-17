import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Paths } from "../common/constants/paths";
import ProductListing from "../pages/product-list";
import ViewProduct from "../pages/view-product";

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.PRODUCT} element={<ProductListing />} />
        <Route path={Paths.VIEW_PRODUCT} element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesManager;
