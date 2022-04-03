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
  playlist: [],
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

  return (
    <VideoContext.Provider
      value={{ videoState, isLoaderLoading, serverResponse, isErrorOccured }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export { useVideo, VideoProvider };
