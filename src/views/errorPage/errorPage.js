import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = (props) => {
  return (
      <>
          <div>404 not found</div>
          <Link to={"/"}>
              <button>Get out of here</button>
          </Link>
      </>
  );
};