import "./display-video-page.css";
import React from "react";
import { FilterList, VideoCard } from "../../components";

export const DisplayVideoPage = () => {
  return (
    <div>
      <FilterList />
      <section className="video-container-wrapper">
        <VideoCard />
      </section>
    </div>
  );
};
