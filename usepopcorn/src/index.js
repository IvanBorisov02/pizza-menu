import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./components/StarRating";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxStars={5} /> */}
  </React.StrictMode>
);
