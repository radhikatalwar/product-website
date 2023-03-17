import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../common/constants/paths";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getAllProducts } from "./services/actions";
import { setProductQueryParameter, setProducts } from "./services/slices";

const useProductHelper = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { productList } = useAppSelector((state) => state.products);
  const [searchValue, setSearchValue] = useState("");

  const debounceCount = useRef(0);
  const api = () =>
    new Promise((res) => {
      setTimeout(() => {
        res(1);
      }, 500);
    });

  const handleSearch = (value: any) => {
    setSearchValue(value);
    debounceCount.current += 1;
    const localDebounceCount = debounceCount.current;
    api().then((d) => {
      if (localDebounceCount !== debounceCount.current) {
        return;
      }
      dispatch(setProductQueryParameter({ search: value }));
      dispatch(getAllProducts());
    });
  };

  const handleNavigate = (id: number) => {
    navigate(`${Paths.VIEW_PRODUCT}?id=${id}`);
  };

  const handleDelete = (id: number) => {
    const filteredData = productList.products.filter((prod) => prod.id !== id);
    dispatch(setProducts({ ...productList, products: filteredData }));
  };

  return {
    handleSearch,
    searchValue,
    setSearchValue,
    dispatch,
    handleNavigate,
    handleDelete,
  };
};

export default useProductHelper;
