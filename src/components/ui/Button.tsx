import React, { FunctionComponent } from "react";

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  error = "error",
  success = "success",
}
type ButtonProps = {
  type: ButtonTypes;
};
const Button: FunctionComponent<ButtonProps> = ({ type, children }) => {
  let style;
  switch (type) {
    case ButtonTypes.primary:
      style = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4";
      break;
    case ButtonTypes.secondary:
      style = "bg-grey-500 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4";
      break;
    case ButtonTypes.error:
      style = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4";
      break;
    case ButtonTypes.success:
      style = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4";
      break;
  }
  return <button className={style}>{children}</button>;
};

export default Button;
