import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../common/constants/paths";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const useViewProductHelper = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const slugId = location.search.split("=")[1];

  const handleNavigate = () => {
    navigate(Paths.PRODUCT);
  };

  return { slugId, dispatch, handleNavigate };
};

export default useViewProductHelper;
