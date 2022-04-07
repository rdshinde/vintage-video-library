import { useState } from "react";
import { ActionModal } from "../action-modal/ActionModal";
import "./playlist-card.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../context";
export const PlaylistCard = ({ playlistData: { playlist } }) => {
  
  const [showActionModal, setActionModalState] = useState(false);
  const { userDataDispatch } = useUserData();
  const actionModalHandler = (type) => {
    if (type === "Delete Playlist") {
      userDataDispatch({ type: "DELETE_PLAYLIST", payload: playlist._id });
    }
    setActionModalState((prev) => !prev);
  };
  
  const imgUrl = `https://i.ytimg.com/vi/${
    playlist?.videos[Number(playlist?.videos?.length - 1)]?._id
  }/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHTLGi9aDsrpHzwXP0ak3xlyDN7w`;


  return (
    <section className="playlist-folder-wrapper">
      <div className="card border-rounded-md">
        <div className="card__body">
          <div className="card__img-container">
            <Link
              key={playlist?._id}
              to={`/playlists/${playlist._id}`}
              state={{ ...playlist }}
            >
              <img src={imgUrl} alt="playlist" />{" "}
            </Link>
            <div className="playlist-info">
              <div className="m-sm m-b-md">
                <i className="fa-solid fa-circle-play text-3"></i>
              </div>
              <p className="text-4 bold-lg">
                {playlist?.videos?.length} Videos
              </p>
            </div>
          </div>
        </div>
        <div className="card__footer p-x-md p-y-sm">
          <h4>{playlist?.title}</h4>
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
