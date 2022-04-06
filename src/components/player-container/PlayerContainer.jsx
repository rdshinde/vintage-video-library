import React from "react";
import "./player-container.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useUserData } from "../../context";
export const PlayerContainer = ({ data: { videoData } }) => {
  const navigate = useNavigate();
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();

  const { userDataDispatch, isInLiked, isInWatchLater } = useUserData();
  const { _id, title, description, creator } = videoData;
  const addtoLikedHandler = (e, videoData) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      if (!isInLiked(_id)) {
        userDataDispatch({
          type: "ADD_TO_LIKED",
          payload: { ...videoData },
        });
      } else {
        userDataDispatch({
          type: "REMOVE_FROM_LIKED",
          payload: _id,
        });
      }
    } else {
      navigate("/login");
    }
  };
  const addToWatchLaterHandler = (e, videoData) => {
    e.stopPropagation();
    if (isUserLoggedIn) {
      if (!isInWatchLater(_id)) {
        userDataDispatch({
          type: "ADD_TO_WATCH_LATER",
          payload: { ...videoData },
        });
      } else {
        userDataDispatch({
          type: "REMOVE_FROM_WATCH_LATER",
          payload: _id,
        });
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="player-container-wrapper">
      <div>
        <iframe
          className="video-iframe"
          src={`https://www.youtube.com/embed/${_id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="player-container__footer">
        <div className="footer__title">
          <h2>{title}</h2>
          <p className="text-4 bold-lg">{creator}</p>
        </div>
        <div className="footer__btns">
          <button
            className={`btn btn-${isInLiked(_id) ? "danger" : "secondary"}`}
            onClick={(e) => addtoLikedHandler(e, videoData)}
          >
            <span className="m-r-md">
              <i className="fa fa-heart"></i>
            </span>
            {isInLiked(_id) ? "Liked" : "Like"}
          </button>
          <button className="btn btn-secondary">
            <span className="m-r-md">
              <i className="fa-solid fa-clapperboard"></i>
            </span>
            Add to Playlist
          </button>
          <button
            className="btn btn-secondary"
            onClick={(e) => addToWatchLaterHandler(e, videoData)}
          >
            <span className="m-r-md">
              <i
                className={`fa fa-${
                  !isInWatchLater(_id) ? "clock" : "trash"
                } m-r-sm`}
              ></i>
            </span>
            {!isInWatchLater(_id) ? "Watch Later" : "Remove From Watch Later"}
          </button>
        </div>
        <div className="footer__description">
          <p className="text-3 bold-lg">Description:</p>
          <p className="text-4 bold-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
