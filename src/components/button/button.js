import React from "react";
import "./button.scss";

export const Button = ({ type = "primary", callBack = () => {}, children }) => {
  return <button onClick={callBack} className={`btn btn-${type}`}>{children}</button>;
};