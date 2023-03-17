import { ChangeEvent, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import useBookingHelper from "./helper";
// import BookingManagementTable from "../../../components/tableList/booking";
// import ConfirmationContainer, {
//   YesCancelPopUp,
// } from "../../../components/pop-ups/confimation";
import { productListingStyles as styles } from "./styles";
import SimpleModal from "../../components/modal/modal";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getAllProducts } from "./services/actions";
import ProductTable from "./productTable";
import useProductHelper from "./helper";

const ProductListing = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { handleSearch, searchValue, setSearchValue } = useProductHelper();

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
        </Box>
        {/* <SimpleModal
            handleClose={handleConfirmationClose}
            isOpen={isConfirmationOpen}
          >
            <ConfirmationContainer>
              <YesCancelPopUp
                message="Are you sure you want to export the list?"
                logo={IMAGES.Checked}
                handleClose={handleConfirmationClose}
                handleConfirm={() => {}}
              />
            </ConfirmationContainer>
          </SimpleModal> */}
      </Box>
      <ProductTable />
    </Box>
  );
};

export default ProductListing;
