import "./display-video-page.css";
import React from "react";
import { FilterList, VideoCard, PlaylistModal } from "../../components";
import { useUserData, useVideo } from "../../context";
export const DisplayVideoPage = () => {
  const { videoState, isLoaderLoading, videosList } = useVideo();
  const { categoryList } = videoState;
  const { isPlaylistModal } = useUserData();
  return (
    <div className="m-t-lg">
      {isPlaylistModal.state && <PlaylistModal />}
      <FilterList data={{ categoryList }} />
      <section className="video-container-wrapper">
        {videosList?.map((video) => (
          <VideoCard key={video._id} data={{ video }} />
        ))}
      </section>
    </div>
  );
};
