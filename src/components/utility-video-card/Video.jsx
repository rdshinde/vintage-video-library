import React from "react";

export const Video = ({
  data: { setActionModalState, _id, title, creator },
}) => {
  return (
    <div className="card card__header-with-avatar border-rounded-md cursor-pointer">
      <div className="card__body">
        <div className="card__img-container card-image">
          <img
            className=""
            src={`https://i.ytimg.com/vi/${_id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHTLGi9aDsrpHzwXP0ak3xlyDN7w`}
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
          <h4 className="p-x-sm video__title text-3 bold-lg">{title}</h4>
          <p className="text-5 bold-lg p-x-sm text-gray">{creator}</p>
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
