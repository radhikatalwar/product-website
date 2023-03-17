import { CSSProperties, Dispatch, ReactNode, SetStateAction } from "react";

export type InputProps = {
  name: string;
  errortipPlacement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  isPhone?: boolean;
  isPassword?: boolean;
  externalStyles?: CSSProperties;
  isRequired?: boolean;
};

export type PasswordIconProps = {
  value?: string;
  children?: ReactNode;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
};
