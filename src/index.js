import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    Home,
    Projects,
    Contact,
    App,
    ErrorPage,
    WorkExperience,
} from "./views/";
import "./index.scss";
import { getAppContext } from "./data/appContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/work-experience",
                element: <WorkExperience />,
            },
        ],
    },
]);

const data = null;
const Context = createContext();

getAppContext().then((res) => {
    console.log(res);
    data = res;
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <Context.Provider value={data} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
