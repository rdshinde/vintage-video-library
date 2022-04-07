import {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { useAuth } from "../index";
import { useAxios } from "../../services";
import { userDataReducer } from "./userDataReducer";
import { Toast } from "../../utils";

const initialUserDataState = {
  playlist: [],
  likedVideos: [],
  historyVideos: [],
  watchLaterVideos: [],
};

const UserDataContext = createContext(initialUserDataState);

const useUserData = () => useContext(UserDataContext);

const UserDataProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [historyVideos, setHistoryVideos] = useState([]);
  const [watchLaterVideos, setWatchlaterVideos] = useState([]);
  const [isPlaylistModal, setPlaylistModal] = useState({
    state: false,
    videoData: {},
  });

  const {
    userAuthState: { isUserLoggedIn, encodedToken },
  } = useAuth();

  const [userDataState, userDataDispatch] = useReducer(userDataReducer, {
    apiURL: "",
    apiMethod: "",
    postData: {
      video: {},
    },
  });

  const { apiURL, apiMethod, postData } = userDataState;

  const { serverResponse, isLoaderLoading, isErrorOccured } = useAxios(
    apiURL,
    apiMethod,
    postData,
    encodedToken
  );

  useEffect(() => {
    if (serverResponse?.status === 200 || serverResponse?.status === 201) {
      if (serverResponse?.data?.likes) {
        setLikedVideos(serverResponse.data?.likes || []);
      } else if (serverResponse?.data?.watchlater) {
        setWatchlaterVideos(serverResponse.data?.watchlater || []);
      } else if (serverResponse?.data?.history) {
        setHistoryVideos(serverResponse.data?.history || []);
      } else if (serverResponse?.data?.playlists) {
        setPlaylists(serverResponse.data?.playlists || []);
      } else if (serverResponse?.data?.playlist) {
        setPlaylists((prev) => [
          ...prev.filter(
            (playlist) => playlist._id !== serverResponse?.data?.playlist?._id
          ),
          { ...serverResponse?.data?.playlist },
        ]);
      }
    } else {
      console.log("error");
    }
  }, [serverResponse]);

  useEffect(() => {
    let setTimeOutID;
    if (!isUserLoggedIn) {
      userDataDispatch({ type: "CLEAR_USER_DATA" });
      setLikedVideos(() => []);
      setWatchlaterVideos(() => []);
    } else {
      userDataDispatch({ type: "GET_LIKED_VIDEOS" });
      setTimeOutID = setTimeout(
        () => userDataDispatch({ type: "GET_WATCH_LATER_VIDEOS" }),
        0
      );
      setTimeOutID = setTimeout(
        () => userDataDispatch({ type: "GET_HISTORY_VIDEOS" }),
        0
      );
      setTimeOutID = setTimeout(
        () => userDataDispatch({ type: "GET_ALL_PLAYLISTS" }),
        0
      );
    }
    return () => clearTimeout(setTimeOutID);
  }, [isUserLoggedIn]);

  const isInLiked = (id) => {
    return likedVideos.some((video) => video._id === id);
  };
  const isInWatchLater = (id) => {
    return watchLaterVideos.some((video) => video._id === id);
  };
  const isInHistory = (id) => {
    return historyVideos.some((video) => video._id === id);
  };
  return (
    <UserDataContext.Provider
      value={{
        likedVideos,
        userDataDispatch,
        userDataState,
        isErrorOccured,
        isLoaderLoading,
        setLikedVideos,
        isInLiked,
        watchLaterVideos,
        isInWatchLater,
        isInHistory,
        historyVideos,
        isPlaylistModal,
        setPlaylistModal,
        playlists,
        setPlaylists,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { useUserData, UserDataProvider };
