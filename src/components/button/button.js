import React from "react";
import "./button.scss";

export const Button = ({ extraClass = "", type = "primary", callBack = () => {}, children }) => {
  return <button onClick={callBack} className={`btn btn-${type} ${extraClass}`}>{children}</button>;
};