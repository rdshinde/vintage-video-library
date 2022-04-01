import "./filterlist.css";
import React from "react";

export const FilterList = () => {
  return (
    <div className="filterlist-wrapper">
      <div className="filter__category">All</div>
      <div className="filter__category">Songs</div>
      <div className="filter__category">Dialogs</div>
      <div className="filter__category">Trailers</div>
    </div>
  );
};
