import React from "react";

export const Button = ({ title = "Button", type = "primary" }) => {
  return <button className={`btn btn-${type}`}>{title}</button>;
};