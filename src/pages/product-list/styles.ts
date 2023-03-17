import { COLORS } from "../../common/constants/colors";

export const productListingStyles = {
  mainContainer: {
    borderRadius: "6px",
    height: "100%",
    margin: "15px 0",
    minHeight: "80vh",
    backgroundColor: COLORS.white,
    boxShadow: "0px 1px 0px #dadbe4",
    width: "90%",
    padding: "20px",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    font: "normal normal 700 30px/35px sans-serif",
    color: COLORS.primary,
  },
  searchAndFilter: {
    display: "flex",
    justifyContent: "flex-end",
    height: "50px",
    padding: "20px 0",
  },
  search: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    background: COLORS.search,
    width: "250px",
    position: "relative",
    justifyContent: "space-between",
  },
  input: {
    padding: "0",
    border: "none",
    outline: "none",
    background: COLORS.search,
    heading: { font: "normal normal 700 14px/34px sans-serif" },
    color: COLORS.black,
    boxSizing: "border-box",
    transition: "all 0.4s ease-out",
    width: "100%",
  },
  icon: { width: "24px", height: "24px", color: "#606060" },
  btn: { marginLeft: "20px", borderRadius: "5px" },
};

export const productTable = {
  table: { border: `1px solid ${COLORS.primary}` },
  tableHeader: {
    "& th": {
      padding: "20px",
      textAlign: "center",
      font: "normal normal 700 18px/22px sans-serif",
      color: COLORS.primary,
      border: `1px solid ${COLORS.primary}`,
    },
    "& th:nth-of-type(1)": { textAlign: "left" },
  },
  row: {
    "& td": {
      textAlign: "center",
      padding: "14px 20px",
      font: "normal normal 500 16px/20px sans-serif",
      color: COLORS.black,
      textTransform: "capitalize",
      border: `1px solid ${COLORS.primary}`,
    },
    "& td:nth-of-type(1)": {
      textAlign: "left",
      maxWidth: "200px",
    },
    "& td:nth-last-of-type(1)": {
      "& svg": { color: COLORS.primary, margin: "0 5px", cursor: "pointer" },
    },
  },
  noDataCell: {
    font: "normal normal 700 18px/24px sans-serif",
    textAlign: "center",
    padding: "16px",
    border: `1px solid ${COLORS.primary}`,
    color: COLORS.primary,
  },
  avatar: { height: "30px", width: "30px", marginRight: "10px" },
  name: { display: "flex", alignItems: "center" },
};
