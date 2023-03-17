import { COLORS } from "../../common/constants/colors";

export const AddProductStyles = {
  mainContainer: {
    borderRadius: "6px",
    height: "100%",
    margin: "15px 0",
    minHeight: "80vh",
    backgroundColor: COLORS.white,
    boxShadow: "0px 1px 0px #dadbe4",
    width: "90%",
    padding: "20px",
    "& svg": { color: COLORS.primary, cursor: "pointer" },
  },
  heading: {
    font: "normal normal 700 30px/35px sans-serif",
    color: COLORS.primary,
    marginLeft: "10px",
  },
  rowQuesAns: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "20px",
  },
  inputField: {
    width: "95%",
    font: "normal normal 500 16px/16px sans-serif",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "20px 0 35px",
  },
  btn: {
    font: "normal normal 700 20px/25px sans-serif",
    height: "70px",
    width: "300px",
    marginRight: "20px",
  },
  textBoxContainer: {
    width: "50%",
  },
};
