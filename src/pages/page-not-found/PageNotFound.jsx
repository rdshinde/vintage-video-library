import React from "react";
import { Link } from "react-router-dom";
import "./page-not-found.css";
import pageNotFound from "../../assets/pageNotFound.jpg";
export const PageNotFound = () => {
  return (
    <div className="page-not-found-container text-3 bold-md m-xxl text-center">
      <div className="text-2 bold-lg">
        <p> Error 404! Page Not Found</p>
        <Link to="/" className="btn btn-link">
          Go to Home
        </Link>
      </div>
      <div>
        <img
          src={pageNotFound}
          className="page-not-found-img"
          alt="page-not-found"
        />
      </div>
    </div>
  );
};
