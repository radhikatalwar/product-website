import { Theme } from "@mui/material";
import { COLORS } from "../../common/constants/colors";

const styles = {
  loaderContainer: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    background: `${COLORS.black}4D`,
  },
  loaderImage: {
    width: "80px",
    margin: "0 auto",
  },
};

export default styles;
