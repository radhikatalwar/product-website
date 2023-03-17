import { COLORS } from "../../common/constants/colors";

export const ViewProductStyles = {
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
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    font: "normal normal 700 30px/35px sans-serif",
    color: COLORS.primary,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "20px 0",
    flexWrap: "wrap",
  },
  image: {
    height: "200px",
    borderRadius: "6px",
    maxWidth: "25%",
    margin: "10px 0",
  },
  avatar: { height: "30px", width: "30px", margin: "0 10px" },
  bookingContainer: { margin: "20px" },
  cardContainer: { margin: "20px 0" },
  textContainer: { width: "100%" },
  detailHeading: {
    font: "normal normal 700 18px/22px sans-serif",
    color: COLORS.primary,
    marginBottom: "10px",
  },
  detail: {
    font: "normal normal 500 18px/22px sans-serif",
    color: COLORS.primary,
    marginBottom: "10px",
    textTransform: "capitalize",
  },
};
