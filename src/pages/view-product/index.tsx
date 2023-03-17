import { useEffect } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ViewProductStyles as styles } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useViewProductHelper from "./helper";
import { getSpecificProduct } from "./services/actions";
import { useAppSelector } from "../../hooks/useAppSelector";

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
              component="img"
              src={image}
              alt="about-image"
              sx={styles.image}
            />
          );
        })}
      </Box>
      <Stack sx={styles.cardContainer} direction="row" spacing={3}>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Description</Typography>
          <Typography sx={styles.detail}>{description ?? "-"}</Typography>
        </Stack>
      </Stack>
      <Stack sx={styles.cardContainer} direction="row" spacing={3}>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Brand</Typography>
          <Typography sx={styles.detail}>{brand ?? "-"}</Typography>
        </Stack>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Category</Typography>
          <Typography sx={styles.detail}>{category ?? "-"}</Typography>
        </Stack>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Price</Typography>
          <Typography sx={styles.detail}>{price ?? "-"}</Typography>
        </Stack>
      </Stack>
      <Stack sx={styles.cardContainer} direction="row" spacing={3}>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Rating</Typography>
          <Typography sx={styles.detail}>{rating ?? "-"}</Typography>
        </Stack>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Stock</Typography>
          <Typography sx={styles.detail}>{stock ?? "-"}</Typography>
        </Stack>
        <Stack sx={styles.textContainer} spacing={1}>
          <Typography sx={styles.detailHeading}>Discount Percentage</Typography>
          <Typography sx={styles.detail}>
            {discountPercentage ?? "-"}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ViewProduct;
