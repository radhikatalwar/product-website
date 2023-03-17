import { COLORS } from "../../../common/constants/colors";

const styles = {
  searchInput: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "4px",
    width: "300px",
    "& .MuiInputBase-root": {
      height: "36px",
      font: "normal normal normal 14px/20px Roboto",
      letterSpacing: "0.05px",
      color: "#515151",
      opacity: 1,
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  label: {
    font: "normal normal 500 14px/14px SofiaPro",
    letterSpacing: "0.59px",
    transition: "ease-in 0.5s",
    color: COLORS.black,
  },
};

export default styles;
