import { ChangeEvent, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { productListingStyles as styles } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getAllProducts } from "./services/actions";
import ProductTable from "./productTable";
import useProductHelper from "./helper";
import { setProductQueryParameter } from "./services/slices";
import ContainedButton from "../../components/button/contained-button";

const ProductListing = () => {
  const dispatch = useAppDispatch();
  const { handleSearch, searchValue, handleNavigateAdd } = useProductHelper();

  useEffect(() => {
    dispatch(getAllProducts());
    return () => {
      dispatch(setProductQueryParameter({ search: "" }));
    };
  }, []);

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.headingContainer}>
        <Typography sx={styles.heading}>Products</Typography>
        <Box sx={styles.searchAndFilter}>
          <Box sx={styles.search}>
            <Box
              component="input"
              value={searchValue}
              placeholder="Search"
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                handleSearch(evt.target.value)
              }
              sx={styles.input}
            />
            <SearchIcon sx={styles.icon} />
          </Box>
          <ContainedButton
            title="+ Add Product"
            externalStyles={styles.btn}
            onClick={handleNavigateAdd}
          />
        </Box>
      </Box>
      <ProductTable />
    </Box>
  );
};

export default ProductListing;
