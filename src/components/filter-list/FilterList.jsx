import "./filterlist.css";
import React from "react";
import { useVideo } from "../../context";

export const FilterList = ({ data: { categoryList } }) => {
  const { videoDispatch } = useVideo();
  const categoryFilterHandler = (e, category) => {
    e.stopPropagation();
    videoDispatch({
      type: "FILTER_VIDEO",
      payload: category.categoryName,
    });
  };
  return (
    <div className="filterlist-wrapper">
      {categoryList?.map((category) => (
        <button
          key={category._id}
          className={`btn filter__category ${
            category.isActive && "active-category"
          }`}
          onClick={(e) => {
            categoryFilterHandler(e, category);
          }}
        >
          {category?.categoryName}
        </button>
      ))}
    </div>
  );
};
