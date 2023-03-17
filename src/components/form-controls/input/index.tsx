import { FC, memo } from "react";
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
  const attributes: TextFieldProps = {
    ...otherProps,
    placeholder: `${placeholder}${isRequired ? "*" : ""}`,
    sx: [styles.searchInput],
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
    </Box>
  );
};

export default memo(Input);
