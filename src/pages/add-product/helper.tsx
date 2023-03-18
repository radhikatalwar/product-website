import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../common/constants/paths";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const useAddProductHelper = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const slugId = location.search.split("=")[1];

  const initialvalue = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
  };

  const handleNavigate = () => {
    navigate(Paths.PRODUCT);
  };

  return { slugId, dispatch, handleNavigate, initialvalue };
};

export default useAddProductHelper;
