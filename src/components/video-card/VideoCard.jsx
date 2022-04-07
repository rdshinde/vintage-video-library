import React from "react";
import { useState } from "react";
import { useUserData } from "../../context";
import { PlaylistModal } from "../playlist-modal/PlaylistModal";
import { Video } from "../utility-video-card/Video";
import "./video-card.css";
export const VideoCard = ({ data }) => {
  const { userDataDispatch, isInWatchLater } = useUserData();
  const { _id, title, creator, description, category } = data.video;
  const [showActionModal, setActionModalState] = useState(false);
  const ActionModal = () => {
    return (
      <div className={`action-modal ${showActionModal && "show-action-modal"}`}>
        <div className="action-modal__btn">
          <button
            className="btn"
            onClick={() => ActionModalClickHandler("ADD_TO_PLAYLIST", data.video)}
          >
            <i className="fa-solid fa-clapperboard m-r-md"></i>Add to Playlist
          </button>
        </div>
        <div className="action-modal__btn">
          <button
            className="btn"
            onClick={() => ActionModalClickHandler("ADD_TO_WATCH_LATER", data.video)}
          >
            <i
              className={`fa fa-${
                !isInWatchLater(_id) ? "clock" : "trash"
              } m-r-md`}
            ></i>
            {!isInWatchLater(_id) ? "Watch Later" : "Remove Watch Later"}
          </button>
        </div>
      </div>
    );
  };
  const ActionModalClickHandler = (actionType, videoData) => {
    setActionModalState((prev) => !prev);
    if (actionType === "ADD_TO_WATCH_LATER") {
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
    }
  };
  return (
    <div className="video-card-wrapper" style={{ maxHeight: "22rem" }}>
      <Video video={{ setActionModalState, _id, title, creator }} />
      {ActionModal()}
    </div>
  );
};
