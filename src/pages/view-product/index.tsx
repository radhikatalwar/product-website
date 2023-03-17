import { useEffect } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ViewProductStyles as styles } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useViewProductHelper from "./helper";
import { getSpecificProduct } from "./services/actions";
import { useAppSelector } from "../../hooks/useAppSelector";
import ProductTile from "./productTile";

const ViewProduct = () => {
  const dispatch = useAppDispatch();
  const { slugId, handleNavigate } = useViewProductHelper();
  const { productData } = useAppSelector((state) => state.productData);
  const {
    title,
    images,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    thumbnail,
  } = productData;

  useEffect(() => {
    dispatch(getSpecificProduct(slugId));
  }, []);

  return (
    <Box sx={styles.mainContainer}>
      <Box display="flex" alignItems="center">
        <ArrowBackIcon onClick={handleNavigate} />
        <Avatar sx={styles.avatar} alt="thumbnail" src={thumbnail} />
        <Typography sx={styles.heading}>{`About ${title}`}</Typography>
      </Box>
      <Box sx={styles.imageContainer}>
        {images.map((image: string) => {
          return (
            <Box
              key={image}
              component="img"
              src={image}
              alt="about-image"
              sx={styles.image}
            />
          );
        })}
      </Box>
      <Stack sx={styles.cardContainer} direction="row" spacing={3}>
        <ProductTile heading="Description" value={description ?? "-"} />
      </Stack>
      <Stack sx={styles.cardContainer} direction="row" spacing={3}>
        <ProductTile heading="Brand" value={brand ?? "-"} />
        <ProductTile heading="Category" value={category ?? "-"} />
        <ProductTile heading="Price" value={price ?? "-"} />
      </Stack>
      <Stack sx={styles.cardContainer} direction="row" spacing={3}>
        <ProductTile heading="Rating" value={rating ?? "-"} />
        <ProductTile heading="Stock" value={stock ?? "-"} />
        <ProductTile
          heading="Discount Percentage"
          value={discountPercentage ?? "-"}
        />
      </Stack>
    </Box>
  );
};

export default ViewProduct;
