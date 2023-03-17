import { useEffect } from "react";
import { Form, Formik } from "formik";

import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AddProductStyles as styles } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useAddProductHelper from "./helper";
import { productAdd } from "./services/actions";
import ContainedButton from "../../components/button/contained-button";
import Input from "../../components/form-controls/input";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../common/constants/paths";

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleNavigate, initialvalue } = useAddProductHelper();

  return (
    <Box sx={styles.mainContainer}>
      <Box display="flex" alignItems="center">
        <ArrowBackIcon onClick={handleNavigate} />
        <Typography sx={styles.heading}>Add Product</Typography>
      </Box>
      <Formik
        enableReinitialize
        initialValues={{ ...initialvalue }}
        // validationSchema={Schema.FAQForm}
        onSubmit={(values: typeof initialvalue) => {
          dispatch(
            productAdd(values, () => {
              navigate(Paths.PRODUCT);
            })
          );
        }}
      >
        {({ isValid, dirty, values, errors }) => {
          return (
            <Form>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="normal"
                justifyContent="space-between"
              >
                <Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="title"
                      type="text"
                      label="Title"
                      placeholder="Title"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <>{console.log(values, errors)}</>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="brand"
                      type="text"
                      label="Brand"
                      placeholder="Brand"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="category"
                      type="text"
                      label="Category"
                      placeholder="Category"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="discountPercentage"
                      type="text"
                      label="Discount Percentage"
                      placeholder="Discount Percentage"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="stock"
                      type="text"
                      label="Stock"
                      placeholder="Stock"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="price"
                      type="text"
                      label="Price"
                      placeholder="Price"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="rating"
                      type="text"
                      label="Rating"
                      placeholder="Rating"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                  <Box sx={styles.textBoxContainer}>
                    <Input
                      name="description"
                      type="text"
                      label="Description"
                      placeholder="Description"
                      fullWidth
                      externalStyles={styles.inputField}
                    />
                  </Box>
                </Box>
                <Box sx={styles.btnContainer}>
                  <ContainedButton
                    type="submit"
                    externalStyles={styles.btn}
                    title="Save"
                    // disabled={!(isValid && dirty)}
                  />
                </Box>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default AddProduct;
