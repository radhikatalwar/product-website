import { Stack, Typography } from "@mui/material";
import { ViewProductStyles as styles } from "./styles";

interface ProductTileProps {
  heading: string;
  value: string | number;
}

const ProductTile = ({ heading, value }: ProductTileProps) => {
  return (
    <Stack sx={styles.textContainer} spacing={1}>
      <Typography sx={styles.detailHeading}>{heading}</Typography>
      <Typography sx={styles.detail}>{value}</Typography>
    </Stack>
  );
};

export default ProductTile;
