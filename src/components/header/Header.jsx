import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header-wrapper">
      <header>
        <nav>
          <div className="nav-left">
            <div className="logo-wrapper cursor-pointer">
              <h2>
                <i className="fa-solid fa-video m-r-md"></i>Vintage
              </h2>
            </div>
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
            <button className="btn btn-secondary-outline border-rounded-lg">
              Login
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};
