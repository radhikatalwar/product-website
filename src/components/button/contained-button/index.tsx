import { Button, ButtonProps } from "@mui/material";
import { ContainedButtonProps } from "./contained.type";
import styles from "./contained.style";

const ContainedButton = ({
  title,
  externalStyles,
  ...otherProps
}: ContainedButtonProps & ButtonProps) => {
  return (
    <Button
      variant="contained"
      sx={{ ...styles.btn, ...externalStyles }}
      {...otherProps}
    >
      {title}
    </Button>
  );
};

export default ContainedButton;
