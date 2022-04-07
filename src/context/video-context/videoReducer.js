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
    case "FILTER_VIDEO":
      const updatedCategoryList = state.categoryList.map((category) => {
        if (category.categoryName === payload) {
          return { ...category, isActive: true };
        } else {
          return { ...category, isActive: false };
        }
      });
      return {
        ...state,
        categoryList: updatedCategoryList,
        sortBy: payload,
      };

    default:
      return { ...state };
  }
};
export { videoReducer };
