import { COLORS } from "../../../common/constants/colors";

const styles = {
  input: {
    padding: "5px 0 10px 0",
    "& .MuiInputBase-root": {
      height: "36px",
      font: "normal normal normal 14px/20px sans-serif",
      color: "#515151",
      opacity: 1,
    },
    "& svg": { cursor: "pointer" },
  },
  label: {
    font: "normal normal 500 14px/14px sans-serif",
    transition: "ease-in 0.5s",
    color: COLORS.black,
  },
};

export default styles;
