import { COLORS } from "../../../common/constants/colors";

const styles = {
  btn: {
    textTransform: "capitalize",
    cursor: "pointer",
    borderRadius: "0",
    background: `linear-gradient(30.99deg, ${COLORS.primary} 0%, ${COLORS.lightBlue} 100%)`,
    font: `normal normal 700 18px/18px sans-serif`,
    letterSpacing: "0.59px",
    boxShadow: `0px 10px 14px rgba(0, 0, 0, 0.15)`,
    "&.MuiButtonBase-root": {
      color: `${COLORS.white} !important`,
      "&:hover": {
        background: `linear-gradient(30.99deg, ${COLORS.primary} 0%, ${COLORS.lightBlue} 100%)`,
        color: COLORS.white,
      },
    },
  },
};
export default styles;
