import { PlaylistCard } from "../../components/playlist-card/PlaylistCard";
import { Link } from "react-router-dom";
import { useAuth, useUserData } from "../../context";
import "./playlist-page.css";
export const PlaylistPage = () => {
  const { playlists } = useUserData();
  const {
    userAuthState: { isUserLoggedIn },
  } = useAuth();
  return (
    <div>
      {isUserLoggedIn ? (
        <div>
          <h3 className="playlist__heading">Your Playlists </h3>
          <div className="video-container-wrapper">
            {playlists?.map((playlist) => {
              if (playlist.videos.length !== 0) {
                return (
                  <PlaylistCard
                    key={playlist?._id}
                    playlistData={{ playlist }}
                  />
                );
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
