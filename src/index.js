import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import AppRouter from "./router/AppRouter";
import reducers from "./reducers";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Provider
    store={createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <AppRouter />
  </Provider>);