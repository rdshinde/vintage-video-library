import { WatchLaterVideo } from "../../components";
import { useUserData, useAuth } from "../../context";
import { Link } from "react-router-dom";
export const WatchLaterVideoPage = () => {
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  const { watchLaterVideos } = useUserData();
  return (
    <div>
      {isUserLoggedIn ? (
        <div>
          <h3 className="playlist__heading">Watch Later</h3>
          <section className="video-container-wrapper">
            {watchLaterVideos?.map((video) => {
              return <WatchLaterVideo key={video._id} videoData={{ video }} />;
            })}
          </section>
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
