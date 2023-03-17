import { Stack, Typography } from "@mui/material";
import { ViewProductStyles as styles } from "./styles";

interface ProductTile {
  heading: string;
  value: string | number;
}

const ProductTile = ({ heading, value }: ProductTile) => {
  return (
    <Stack sx={styles.textContainer} spacing={1}>
      <Typography sx={styles.detailHeading}>{heading}</Typography>
      <Typography sx={styles.detail}>{value}</Typography>
    </Stack>
  );
};

export default ProductTile;
