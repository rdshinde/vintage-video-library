import { useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { Link } from "react-router-dom";
import { PlaylistVideo } from "../../components";
export const PlaylistVideosPage = () => {
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  const location = useLocation();
  const playlist = { ...location.state };
  const playlistId = playlist?._id;

  return (
    <div className="ralative">
      {isUserLoggedIn ? (
        <div>
          <h3 className="playlist__heading">{playlist?.title} Videos</h3>
          <div className="video-container-wrapper">
            {playlist?.videos?.map((video) => {
              return (
                <PlaylistVideo
                  key={video?._id}
                  videoData={{ video, playlistId }}
                />
              );
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
