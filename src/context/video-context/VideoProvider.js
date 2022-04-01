import axios from "axios";
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
  const [videoState, videoDispatch] = useReducer(initialState);

  const [isLoaderLoading, setLoaderState] = useState(false);

  return <VideoContext.Provider>{children}</VideoContext.Provider>;
};
export { useVideo, VideoProvider };
