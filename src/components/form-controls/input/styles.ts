import { COLORS } from "../../../common/constants/colors";

const styles = {
  input: {
    "& .MuiInputBase-root": {
      font: "normal normal normal 14px/20px sans-serif",
      opacity: 1,
    },
  },
  label: {
    font: "normal normal 500 14px/14px sans-serif",
    transition: "ease-in 0.5s",
    color: COLORS.black,
    margin: "10px 0 5px 0",
  },
  error: {
    font: "normal normal 500 14px/14px sans-serif",
    color: COLORS.themeError,
    marginTop: "5px",
  },
  none: { display: "none" },
};

export default styles;
