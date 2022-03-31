import "./stylesheets/App.css";
import { AuthPage, DisplayVideoPage, LayoutWrapper } from "./pages";

function App() {
  return (
    <div className="App">
      <LayoutWrapper>
        <AuthPage />
      </LayoutWrapper>
    </div>
  );
}

export default App;
