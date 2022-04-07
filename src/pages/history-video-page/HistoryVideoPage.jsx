import { Link } from "react-router-dom";
import "./history-video-page.css";
import { useAuth, useUserData } from "../../context";
import { HistoryVideo } from "../../components";
import { Toast } from "../../utils";
export const HistoryVideoPage = () => {
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  const { historyVideos, userDataDispatch } = useUserData();
  const clearHistoryHandler = (e) => {
    e.stopPropagation();
    userDataDispatch({
      type: "CLEAR_ALL_HISTORY",
    });
    Toast({ type: "success", msg: "History cleared successfully" });
  };
  return (
    <div>
      {isUserLoggedIn ? (
        <div>
          <div className="clear-history__wrapper">
            <h3 className="playlist__heading">History</h3>
            <button
              className="btn btn-link"
              onClick={(e) => clearHistoryHandler(e)}
            >
              Clear History
            </button>
          </div>
          <div className="video-container-wrapper">
            {historyVideos?.map((video) => {
              if (video) {
                return <HistoryVideo key={video?._id} data={{ video }} />;
              }
            })}
          </div>
        </div>
      ) : (
        <div className="video-container-wrapper flex-center">
          <h3 className="playlist__heading">
            Please Login to access this feature.
          </h3>

          <Link to={"/auth"} className="btn btn-link">
            Login Here
          </Link>
        </div>
      )}
    </div>
  );
};
