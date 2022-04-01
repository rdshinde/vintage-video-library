import "./playlist-modal.css";

import { useState } from "react";

export const PlaylistModal = () => {
  const [showPlaylistModal, setPlaylistModal] = useState(true);
  return (
    <div
      className={`playlist-modal ${
        !showPlaylistModal && "hide-playlist-modal"
      }`}
    >
      <h3 className="text-center m-md">Add to Playlist</h3>
      <div className="input-group text-center">
        <label htmlFor="playlist-modal-input">Playlist Name &nbsp; </label>
        <input type="text" className="border-rounded-md" />
        <button className="btn btn-default border-rounded-md m-t-md">
          Create New Playlist
        </button>
      </div>
      <div className="playlist text-center">
        <div className="input-group">
          <label htmlFor="playlist-name">
            <input
              id="playlist-name"
              name="playlist1"
              type="checkbox"
              placeholder="ex. favourite"
            />
            Playlist 1
          </label>
        </div>
      </div>
      <div className="m-md flex-center">
        <button
          className="btn btn-danger-outline m-r-md border-rounded-lg"
          onClick={() => {
            setPlaylistModal(() => false);
          }}
        >
          Close
        </button>
        <button className="btn btn-default border-rounded-lg">
          Add to Playlist
        </button>
      </div>
    </div>
  );
};
