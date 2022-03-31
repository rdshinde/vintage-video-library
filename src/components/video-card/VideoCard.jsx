import React from "react";
import { useState } from "react";
import { PlaylistModal } from "../playlist-modal/PlaylistModal";
import { Video } from "../utility-video-card/Video";
import "./video-card.css";
export const VideoCard = () => {
  const [showActionModal, setActionModalState] = useState(false);
  const ActionModal = () => {
    return (
      <div className={`action-modal ${showActionModal && "show-action-modal"}`}>
        <div className="action-modal__btn">
          <button
            className="btn"
            onClick={() => setActionModalState((prev) => !prev)}
          >
            <i className="fa-solid fa-clapperboard m-r-md"></i>Add to Playlist
          </button>
        </div>
        <div className="action-modal__btn">
          <button
            className="btn"
            onClick={() => setActionModalState((prev) => !prev)}
          >
            <i className="fa fa-clock m-r-md"></i>Watch Later
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="video-card-wrapper">
      <Video data={{ setActionModalState }} />
      {ActionModal()}
      {/* {<PlaylistModal />} */}
    </div>
  );
};
