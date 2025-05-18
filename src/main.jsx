// ** React Imports
import React, { StrictMode, Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";

import reportWebVitals from "./reportWebVitals.js";
import axios from "axios";

import store  from "./redux/store";
import { Provider } from "react-redux";
// ** Toast
import { Toaster } from "react-hot-toast";
// ** Spinner (Splash Screen)
import Spinner from "./components/common/spinner/Fallback-spinner";
import { AbilityContext } from "./utility/context/Can.jsx";
import { ThemeContext } from "./utility/context/ThemeColors.jsx";
// import App from './App.jsx'

// console.log('store', store, store?.getState);
// ** Service Worker
// import * as serviceWorker from "./serviceWorker"

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));
const baseUrl =  import.meta.env.VITE_API_URL // process.env.base_url
console.log('mm', baseUrl, import.meta.env.VITE_API_URL)
axios.interceptors.request.use((request) => {
  if (request.url) {
    request.url =  baseUrl + request.url;
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
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <AbilityContext.Provider>
          <ThemeContext>
            <LazyApp />
            <Toaster
              position={{toastPosition: "top-right"}}
              toastOptions={{ className: "react-hot-toast" }}
            />
          </ThemeContext>
        </AbilityContext.Provider>
      </Suspense>
    </Provider>
  </React.StrictMode>
)

// root.render(
//   <React.StrictMode>
//   <Provider store={store}>
//    <App />
//   </Provider>
// </React.StrictMode>
// );

reportWebVitals();
