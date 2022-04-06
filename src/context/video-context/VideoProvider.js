import { useAxios } from "../../services";
import { videoReducer } from "./videoReducer";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const initialState = {
  videoList: [],
  categoryList: [],
  sortBy: "",
};

const VideoContext = createContext();
const useVideo = () => useContext(VideoContext);

const VideoProvider = ({ children }) => {
  const [apiURL, setApiURL] = useState("/api/videos");
  const { isLoaderLoading, serverResponse, isErrorOccured } = useAxios(apiURL);
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    if (serverResponse.status === 200) {
      if (serverResponse.data?.videos) {
        const videosFromServer = serverResponse.data?.videos || [];
        videoDispatch({
          type: "UPDATE_VIDEO_LIST",
          payload: [...videosFromServer],
        });
      } else if (serverResponse.data?.categories) {
        const categoriesFromServer = serverResponse.data?.categories || [];
        videoDispatch({
          type: "UPDATE_CATEGORIES_LIST",
          payload: [...categoriesFromServer],
        });
      }
    }
  }, [serverResponse]);

  const getCategories = () => {
    let setTimeoutID = setTimeout(() => {
      setApiURL("/api/categories");
    }, 0);
    return () => clearTimeout(setTimeoutID);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const getFilteredVideos = (sortBy, videos) => {
    const videoList = [...videos];
    if (sortBy && sortBy === "song") {
      return videoList.filter((video) => video.category === "song");
    } else if (sortBy && sortBy === "movie") {
      return videoList.filter((video) => video.category === "movie");
    } else if (sortBy && sortBy === "trailer") {
      return videoList.filter((video) => video.category === "trailer");
    } else if (sortBy && sortBy === "dialog") {
      return videoList.filter((video) => video.category === "dialog");
    } else {
      return [...videoList];
    }
  };
  const videosList = getFilteredVideos(videoState.sortBy, videoState.videoList);
  return (
    <VideoContext.Provider
      value={{
        videoState,
        isLoaderLoading,
        serverResponse,
        isErrorOccured,
        videosList,
        videoDispatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export { useVideo, VideoProvider };
