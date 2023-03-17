import { FC, memo } from "react";
import { useField } from "formik";

import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import { InputProps } from "./type";
import styles from "./styles";

const Input: FC<InputProps & TextFieldProps> = ({
  name,
  label,
  placeholder,
  externalStyles = {},
  isRequired = false,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const attributes: TextFieldProps = {
    ...field,
    ...otherProps,
    error: meta.touched && Boolean(meta.error),
    placeholder: `${placeholder}${isRequired ? "*" : ""}`,
    sx: [styles.input],
    autoComplete: "off",
  };

  return (
    <Box sx={[externalStyles]}>
      {label && (
        <Typography
          component="div"
          variant="h6"
          color="primary"
          sx={styles.label}
        >
          {`${label}${isRequired ? "*" : ""}`}
        </Typography>
      )}
      <TextField {...attributes} />
      {meta.touched && Boolean(meta.error) && (
        <Typography>{meta.error}</Typography>
      )}
    </Box>
  );
};

export default memo(Input);
