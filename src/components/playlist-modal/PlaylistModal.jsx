import "./playlist-modal.css";

import { useState } from "react";
import { useUserData } from "../../context";
import { Toast } from "../../utils";

export const PlaylistModal = () => {
  const { userDataDispatch } = useUserData();
  const { isPlaylistModal, setPlaylistModal, playlists } = useUserData();

  const [checkedPlaylist, setCheckedPlaylist] = useState();
  const [playlistName, setPlaylistName] = useState("");
  const createPlaylistHandler = (e, playlistName) => {
    e.stopPropagation();
    if (playlistName) {
      userDataDispatch({ type: "CREATE_PLAYLIST", payload: playlistName });
      setPlaylistName("");
    } else {
      Toast({ type: "error", msg: "Please enter playlist name." });
    }
  };
  const addToPlaylistHandler = (e) => {
    if (e.target.checked) {
      setCheckedPlaylist(e.target.value);
    }
  };

  const addVideoToPlaylistHandler = (checkedPlaylist, isPlaylistModal) => {
    if (checkedPlaylist) {
      userDataDispatch({
        type: "ADD_VIDEO_IN_PLAYLIST",
        payload: {
          videoData: isPlaylistModal.videoData,
          playlistId: checkedPlaylist,
        },
      });
      setPlaylistModal({ state: false, videoData: {} });
    } else {
      Toast({ type: "error", msg: "Please select playlist to add video." });
    }
  };
  return (
    <div
      className={`playlist-modal ${
        !isPlaylistModal.state && "hide-playlist-modal"
      }`}
    >
      <h3 className="text-center m-md">Add to Playlist</h3>
      <div className="input-group text-center">
        <label htmlFor="playlist-modal-input">Playlist Name &nbsp; </label>
        <input
          type="text"
          className="border-rounded-md"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <button
          className="btn btn-default border-rounded-md m-t-md"
          onClick={(e) => createPlaylistHandler(e, playlistName)}
        >
          Create New Playlist
        </button>
      </div>
      <div className="playlist text-center">
        <div className="input-group">
          {playlists.map((playlist) => {
            return (
              <div className="text-start" key={playlist._id}>
                <label htmlFor={playlist._id}>
                  <input
                    className="m-md"
                    id={playlist._id}
                    name="playlists"
                    type="radio"
                    placeholder="ex. favourite"
                    value={playlist._id}
                    onChange={(e) => addToPlaylistHandler(e)}
                  />
                  {playlist.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="m-md flex-center">
        <button
          className="btn btn-danger-outline m-r-md border-rounded-lg"
          onClick={() => {
            setPlaylistModal(false);
          }}
        >
          Close
        </button>
        <button
          className="btn btn-default border-rounded-lg"
          onClick={(e) => {
            e.stopPropagation();
            addVideoToPlaylistHandler(checkedPlaylist, isPlaylistModal);
          }}
        >
          Add to Playlist
        </button>
      </div>
    </div>
  );
};
