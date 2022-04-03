import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context";
export const Header = () => {
  const { userAuthState } = useAuth();
  const isUserLoggedIn = userAuthState?.isUserLoggedIn;
  return (
    <div className="header-wrapper">
      <header>
        <nav>
          <div className="nav-left">
            <NavLink to="/" className="logo-wrapper cursor-pointer nav-link">
              <h2>
                <i className="fa-solid fa-video m-r-md"></i>Vintage
              </h2>
            </NavLink>
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
            {!isUserLoggedIn && (
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive
                    ? `btn btn-warning border-rounded-lg nav-link`
                    : `btn btn-secondary-outline border-rounded-lg nav-link`
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};
