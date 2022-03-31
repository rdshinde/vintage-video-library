import { useState } from "react";
import { ActionModal } from "../action-modal/ActionModal";
import "./playlist-card.css";
export const PlaylistCard = () => {
  const [showActionModal, setActionModalState] = useState(false);
  const actionModalHandler = (type) => {
    setActionModalState((prev) => !prev);
    console.log(type);
  };
  return (
    <section className="playlist-folder-wrapper">
      <div className="card border-rounded-md">
        <div className="card__body">
          <div className="card__img-container">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/14/00/08/old-man-1739154__480.jpg"
              alt="playlist"
            />
            <div className="playlist-info">
              <div className="m-sm m-b-md">
                <i className="fa-solid fa-circle-play text-3"></i>
              </div>
              <p className="text-4 bold-lg">2+ Videos</p>
            </div>
          </div>
        </div>
        <div className="card__footer p-x-md p-y-sm">
          <h4>Favourite</h4>
          <button
            className="btn btn-link text-offwhite"
            onClick={() => setActionModalState((prev) => !prev)}
          >
            <i className="fa fa-ellipsis-v"></i>
          </button>
        </div>
        {
          <ActionModal
            data={{
              showActionModal,
              actionModalHandler,
              btns: [{ btnText: "Delete Playlist" }],
            }}
          />
        }
      </div>
    </section>
  );
};
