const videoReducer = (state, { type, payload }) => {
  //   const { videoList, categoryList, playlist, sortBy } = state;
  switch (type) {
    case "UPDATE_VIDEO_LIST":
      return {
        ...state,
        videoList: [...payload],
      };

    case "UPDATE_CATEGORIES_LIST":
      return {
        ...state,
        categoryList: [...payload],
      };

    default:
      return { ...state };
  }
};
export { videoReducer };
