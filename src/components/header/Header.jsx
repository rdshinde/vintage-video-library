import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <nav>
          <div className="nav-left">
            <Link
              to="/"
              className="logo-wrapper cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <h2>
                <i className="fa-solid fa-video m-r-md"></i>Vintage
              </h2>
            </Link>
          </div>
          <div className="nav-center">
            <div className="search-container">
              <i className="fa fa-search m-r-lg" aria-hidden="true"></i>
              <input
                type="text"
                name="search"
                className="search-bar"
                placeholder="Search for Videos"
              />
            </div>
          </div>
          <div className="nav-right">
            <Link
              to="/auth"
              style={{ textDecoration: "none" }}
              className="btn btn-secondary-outline border-rounded-lg"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
