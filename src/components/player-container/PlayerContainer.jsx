import React from "react";
import "./player-container.css";
export const PlayerContainer = () => {
  return (
    <div className="player-container-wrapper">
      <div>
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/YT7tQzmGRLA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="player-container__footer">
        <div className="footer__title">
          <h2>Atomic Habits by James Clear</h2>
          <p className="text-4 bold-lg">Ali Abdal</p>
        </div>
        <div className="footer__btns">
          <button className="btn btn-secondary">
            <span className="m-r-md">
              <i className="fa fa-heart"></i>
            </span>
            Like
          </button>
          <button className="btn btn-secondary">
            <span className="m-r-md">
              <i className="fa-solid fa-clapperboard"></i>
            </span>
            Add to Playlist
          </button>
          <button className="btn btn-secondary">
            <span className="m-r-md">
              <i className="fa fa-clock"></i>
            </span>
            Watch Later
          </button>
        </div>
        <div className="footer__description">
          <p className="text-3 bold-lg">Description:</p>
          <p className="text-4 bold-lg">
            In this episode of Book Club we're talking about Atomic Habits by
            James Clear. We look at the power of 1% change, the importance of
            adopting better systems rather than setting goals, the need to focus
            on identity rather than outcomes and, ultimately, how to build
            better habits through the 4 laws
          </p>
        </div>
      </div>
    </div>
  );
};
