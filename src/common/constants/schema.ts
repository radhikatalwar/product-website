import * as Yup from "yup";

const ProductForm = () => {
  return Yup.object().shape({
    title: Yup.string()
      .trim()
      .required("Please enter Title")
      .max(50, "Maximum 50 characters are allowed"),
    description: Yup.string()
      .trim()
      .required("Please enter Description")
      .max(200, "Maximum 200 characters are allowed"),
    brand: Yup.string()
      .trim()
      .required("Please enter Brand Name.")
      .max(50, "Maximum 50 characters are allowed"),
    category: Yup.string()
      .trim()
      .required("Please enter Category Name.")
      .max(50, "Maximum 50 characters are allowed"),
    discountPercentage: Yup.number()
      .required("Please enter Discount")
      .max(100, "Discount Should be less than or equal to 100")
      .positive("Discount can't be negative"),
    rating: Yup.number()
      .required("Please enter Rating")
      .max(5, "Rating Should be less than  or equal to 5")
      .positive("Rating can't be negative"),
    stock: Yup.number()
      .required("Please enter Stock")
      .max(10000, "Stock should be less than 10000")
      .positive("Stock can't be negative"),
    price: Yup.number()
      .required("Please enter Price")
      .max(1000000, "Price should be less than 1000000")
      .positive("Price can't be negative"),
    thumbnail: Yup.string().trim().required("Please enter Thumbnail"),
  });
};

const Schema = {
  ProductForm,
};

export default Schema;
