import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
