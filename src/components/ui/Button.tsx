import React, { FunctionComponent } from "react";

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  error = "error",
  success = "success",
}
type ButtonProps = {
  type: ButtonTypes;
  onClick: any;
};
const Button: FunctionComponent<ButtonProps> = ({ type, children, onClick }) => {
  let style;
  switch (type) {
    case ButtonTypes.primary:
      style = "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-6 px-8 rounded ml-5 mt-5";
      break;
    case ButtonTypes.secondary:
      style = "bg-grey-500 hover:bg-grey-700 text-white font-bold py-6 px-8 rounded ml-5 mt-5";
      break;
    case ButtonTypes.error:
      style = "bg-red-500 hover:bg-red-700 text-white font-bold py-6 px-8 rounded ml-5 mt-5";
      break;
    case ButtonTypes.success:
      style = "bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-8 rounded ml-5 mt-5";
      break;
  }
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
