import React from "react";
import ReactDOM from "react-dom/client";
import { CountryApp } from "./CountryApp.jsx";

import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CountryApp />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
