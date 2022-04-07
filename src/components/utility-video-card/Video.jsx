import { Link } from "react-router-dom";

export const Video = ({
  video: { setActionModalState, _id, title, creator },
}) => {
  return (
    <div className="card card__header-with-avatar border-rounded-md cursor-pointer">
      <div className="card__body">
        <div className="card__img-container card-image">
          <Link to={`/video/${_id}`}>
            <img
              src={`https://i.ytimg.com/vi/${_id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHTLGi9aDsrpHzwXP0ak3xlyDN7w`}
              alt="video"
            />
          </Link>
        </div>
      </div>
      <div className="card__footer ">
        <div className="video__title m-md">
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
