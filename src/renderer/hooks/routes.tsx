import { createHashRouter } from "react-router-dom";

import App from "renderer/views/app";
export default createHashRouter([
    {
        index: true,
        element: <App />
    },
    {
        path: "*",
        element: "404: Not found!",
    }
]);