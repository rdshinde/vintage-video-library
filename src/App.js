import "./stylesheets/App.css";
import {
  AuthPage,
  DisplayVideoPage,
  LayoutWrapper,
  LikedVideoPage,
  PageNotFound,
  PlaylistPage,
  WatchLaterVideoPage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { HistoryVideoPage } from "./pages/history-video-page/HistoryVideoPage";
function App() {
  return (
    <div className="App">
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<DisplayVideoPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/liked-video" element={<LikedVideoPage />} />
          <Route path="/watch-later" element={<WatchLaterVideoPage />} />
          <Route path="/history" element={<HistoryVideoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LayoutWrapper>
    </div>
  );
}

export default App;
