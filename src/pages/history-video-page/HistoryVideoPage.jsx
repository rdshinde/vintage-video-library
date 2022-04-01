import React from "react";
import { VideoCard } from "../../components";

export const HistoryVideoPage = () => {
  return (
    <div>
      <h3 className="playlist__heading">History</h3>
      <section className="video-container-wrapper">
        <VideoCard />
      </section>
    </div>
  );
};
