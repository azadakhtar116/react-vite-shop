// import { React, StrictMode } from "react";
import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";

import reportWebVitals from "./reportWebVitals.js";
import axios from "axios";

import store from "./redux/store.js";

axios.interceptors.request.use((request) => {
  if (request.url) {
    request.url = process.env.base_url + request.url;
  }
  if (localStorage.getItem("token")) {
    request.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }
  return request;
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

reportWebVitals();
