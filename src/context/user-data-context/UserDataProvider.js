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
  const [plalist, setPlaylist] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [historyVideos, setHistoryVideos] = useState([]);
  const [watchLaterVideos, setWatchlaterVideos] = useState([]);

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
        console.log(serverResponse.data?.watchlater);
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
    }
    return () => clearTimeout(setTimeOutID);
  }, [isUserLoggedIn]);

  const isInLiked = (id) => {
    return likedVideos.some((video) => video._id === id);
  };
  const isInWatchLater = (id) => {
    return watchLaterVideos.some((video) => video._id === id);
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
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { useUserData, UserDataProvider };
