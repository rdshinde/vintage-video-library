import "./layout.css";
import { Header, Sidebar } from "../../components";
import { ToastContainer } from "react-toastify";

export const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <main>
        <Sidebar />
        <div className="video-container">{children}</div>
      </main>
    </div>
  );
};
