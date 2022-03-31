import { PlaylistCard } from "../../components/playlist-card/PlaylistCard";
import "./playlist-page.css";
export const PlaylistPage = () => {
  return (
    <div className="playlist-container-wrapper">
      <h3 className="playlist__heading">Your Playlists</h3>
      <div className="video-container-wrapper">
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </div>
  );
};
