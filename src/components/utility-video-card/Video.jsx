import React from "react";

export const Video = ({ data: { setActionModalState } }) => {
  return (
    <div className="card card__header-with-avatar border-rounded-md cursor-pointer">
      <div className="card__body">
        <div className="card__img-container card-image">
          <img
            className=""
            src="https://cdn.pixabay.com/photo/2016/10/14/00/08/old-man-1739154__480.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="card__footer ">
        <img
          className="avatar"
          src="https://cdn.pixabay.com/photo/2016/10/14/00/08/old-man-1739154__480.jpg"
          alt=""
        />
        <div className="video__title m-y-md">
          <h4 className="p-x-sm video__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            fugiat.
          </h4>
          <p className="text-5 bold-lg p-x-sm text-gray">Lorem, ipsum.</p>
        </div>
        <button
          className="btn btn-link text-offwhite"
          onClick={() => setActionModalState((prev) => !prev)}
        >
          <i className="fa fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};
