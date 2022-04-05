import { useParams } from "react-router-dom";
import { Loader, PlayerContainer } from "../../components";
import { useAxios } from "../../services";
import { Toast } from "../../utils";
import { useState, useEffect } from "react";

export const VideoPlayerPage = () => {
  const { videoId } = useParams("videoId");
  const [videoData, setVideoData] = useState({});
  const { isLoaderLoading, serverResponse, isErrorOccured } = useAxios(
    `/api/video/${videoId}`
  );
  useEffect(() => {
    if (serverResponse?.status === 200 || serverResponse?.status === 201) {
      setVideoData((prev) => ({ ...prev, ...serverResponse.data.video }));
    } else {
      console.log("error");
    }
  }, [serverResponse]);

  return (
    <div>
      <div className="video-container-wrapper relative">
        {(isLoaderLoading || isErrorOccured) && <Loader />}
        <PlayerContainer data={{ videoData }} />
      </div>
    </div>
  );
};
