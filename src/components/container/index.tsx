import { Box } from "@mui/material";
import styles from "./styles";
import { MainContainerProps } from "./types";

const MainContainer = ({ children }: MainContainerProps) => {
  return <Box sx={styles.mainContainer}>{children}</Box>;
};

export default MainContainer;
