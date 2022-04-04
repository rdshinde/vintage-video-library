import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, VideoProvider } from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <VideoProvider>
        <Router>
          <App />
        </Router>
      </VideoProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
