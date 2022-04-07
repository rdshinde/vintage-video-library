const userDataReducer = (state, { type, payload }) => {
  switch (type) {
    case "CLEAR_USER_DATA":
      return {
        ...state,
        apiURL: "",
        apiMethod: "",
        postData: {
          video: {},
        },
      };
    case "GET_LIKED_VIDEOS":
      return {
        ...state,
        apiURL: "/api/user/likes",
        apiMethod: "GET",
        postData: {
          video: {},
        },
      };
    case "ADD_TO_LIKED":
      return {
        ...state,
        apiURL: `/api/user/likes`,
        apiMethod: "POST",
        postData: {
          video: { ...payload },
        },
      };
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        apiURL: `/api/user/likes/${payload}`,
        apiMethod: "DELETE",
        postData: {
          video: {},
        },
      };
    case "GET_WATCH_LATER_VIDEOS":
      return {
        ...state,
        apiURL: "/api/user/watchlater",
        apiMethod: "GET",
        postData: {
          video: {},
        },
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        apiURL: "/api/user/watchlater",
        apiMethod: "POST",
        postData: {
          video: { ...payload },
        },
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        apiURL: `/api/user/watchlater/${payload}`,
        apiMethod: "DELETE",
        postData: {
          video: {},
        },
      };
    case "GET_HISTORY_VIDEOS":
      return {
        ...state,
        apiURL: `/api/user/history`,
        apiMethod: "GET",
        postData: {
          video: {},
        },
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        apiURL: `/api/user/history`,
        apiMethod: "POST",
        postData: {
          video: { ...payload },
        },
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        apiURL: `/api/user/history/${payload}`,
        apiMethod: "DELETE",
        postData: {
          video: {},
        },
      };
    case "CLEAR_ALL_HISTORY":
      return {
        ...state,
        apiURL: `/api/user/history/all`,
        apiMethod: "DELETE",
        postData: {
          video: {},
        },
      };
    case "GET_ALL_PLAYLISTS":
      return {
        ...state,
        apiURL: `/api/user/playlists`,
        apiMethod: "GET",
        postData: {
          video: {},
        },
      };
    case "CREATE_PLAYLIST":
      return {
        ...state,
        apiURL: `/api/user/playlists`,
        apiMethod: "POST",
        postData: {
          playlist: { title: payload, description: "" },
        },
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        apiURL: `/api/user/playlists/${payload}`,
        apiMethod: "DELETE",
        postData: {
          video: {},
        },
      };
    case "GET_SINGLE_PLAYLIST":
      return {
        ...state,
        apiURL: `/api/user/playlists/${payload}`,
        apiMethod: "GET",
        postData: {
          video: {},
        },
      };
    case "ADD_VIDEO_IN_PLAYLIST":
      return {
        ...state,
        apiURL: `/api/user/playlists/${payload.playlistId}`,
        apiMethod: "POST",
        postData: {
          video: { ...payload.videoData },
        },
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        apiURL: `/api/user/playlists/${payload.playlistId}/${payload.videoId}`,
        apiMethod: "DELETE",
        postData: {
          video: {},
        },
      };
    default:
      return { ...state };
  }
};

export { userDataReducer };
