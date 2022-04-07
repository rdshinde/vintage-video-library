import "./stylesheets/App.css";
import {
  AuthPage,
  DisplayVideoPage,
  LayoutWrapper,
  LikedVideoPage,
  PageNotFound,
  PlaylistPage,
  WatchLaterVideoPage,
  PlaylistVideosPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { HistoryVideoPage } from "./pages/history-video-page/HistoryVideoPage";
import { VideoPlayerPage } from "./pages/video-player-page/VideoPlayerPage";
function App() {
  return (
    <div className="App">
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<DisplayVideoPage />} />
          <Route path="/video/:videoId" element={<VideoPlayerPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/liked-video" element={<LikedVideoPage />} />
          <Route path="/watch-later" element={<WatchLaterVideoPage />} />
          <Route path="/history" element={<HistoryVideoPage />} />
          <Route
            path="/playlists/:playlistId"
            element={<PlaylistVideosPage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LayoutWrapper>
    </div>
  );
}

export default App;
