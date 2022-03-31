import React from "react";
import { LikedVideo } from "../../components/liked-video/LikedVideo";
export const LikedVideoPage = () => {
  return (
    <div>
      <h3 className="playlist__heading">Your Liked Videos</h3>
      <div className="video-container-wrapper" >
        <LikedVideo />
        <LikedVideo />
        <LikedVideo />
        <LikedVideo />
      </div>
    </div>
  );
};
