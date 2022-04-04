import "./display-video-page.css";
import React from "react";
import { FilterList, VideoCard } from "../../components";
import { useVideo } from "../../context";
export const DisplayVideoPage = () => {
  const { videoState, isLoaderLoading } = useVideo();
  const { videoList, categoryList } = videoState;
  return (
    <div className="m-t-lg">
      <FilterList data={categoryList} />
      <section className="video-container-wrapper">
        {videoList.map((video) => (
          <VideoCard key={video._id} data={{ video }} />
        ))}
      </section>
    </div>
  );
};
