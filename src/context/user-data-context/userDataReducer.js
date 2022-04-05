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

    default:
      return { ...state };
  }
};

export { userDataReducer };
