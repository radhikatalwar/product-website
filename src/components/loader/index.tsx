import { Backdrop, Box } from "@mui/material";
import { IMAGES } from "../../common/constants/images";
import { useAppSelector } from "../../hooks/useAppSelector";
import styles from "./styles";

const Loader = () => {
  const { loading } = useAppSelector((state) => state.globalcontent);

  return (
    <Backdrop sx={styles.loaderContainer} open={loading}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          sx={styles.loaderImage}
          src={IMAGES.Loader}
          alt="Loader"
        />
      </Box>
    </Backdrop>
  );
};

export default Loader;
