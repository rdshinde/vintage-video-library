import { Header, Sidebar } from "../../components";
import "./layout.css";
export const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Sidebar />
        <div className="video-container">{children}</div>
      </main>
    </div>
  );
};
