import { Link } from "react-router-dom";
import { LikedVideo } from "../../components/liked-video/LikedVideo";
import { useAuth, useUserData } from "../../context";
export const LikedVideoPage = () => {
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  const { likedVideos } = useUserData();
  return (
    <div>
      {isUserLoggedIn ? (
        <div>
          <h3 className="playlist__heading">Your Liked Videos</h3>
          <div className="video-container-wrapper">
            {likedVideos.map((video) => {
              return <LikedVideo key={video?._id} videoData={{ video }} />;
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
