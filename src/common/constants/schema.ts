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
    discountPercentage: Yup.string().trim().required("Please enter Discount"),
    rating: Yup.string().trim().required("Please enter Rating"),
    stock: Yup.string()
      .trim()
      .required("Please enter Stock")
      .max(50, "Maximum 50 characters are allowed"),
    brand: Yup.string()
      .trim()
      .required("Please enter Brand Name.")
      .max(50, "Maximum 50 characters are allowed"),
    category: Yup.string()
      .trim()
      .required("Please enter Category Name.")
      .max(50, "Maximum 50 characters are allowed"),
    price: Yup.string().trim().required("Please enter Price"),
  });
};

const Schema = {
  ProductForm,
};

export default Schema;
