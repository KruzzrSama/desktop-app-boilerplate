import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import styles from "./assets/styles/index.module.css";
import { ToastContainer } from "react-toastify";

import "./assets/styles/index.module.css";
import "./assets/styles/app.module.css";
import "./assets/styles/components.module.css";

import IpcProvider from "./hooks/ipc";
import routes from "./hooks/routes";
import { Provider } from "react-redux";
import { store } from "./reducers";

const root = document.getElementById("app-mount");
root.classList.add(styles.appMount);

createRoot(root).render(
    <IpcProvider>
        <Provider store={store}>
            <ToastContainer />
            <RouterProvider router={routes} />
        </Provider>
    </IpcProvider>
);