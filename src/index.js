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
    Skills
} from "./views/";
import "./index.scss";

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
                path: "/skills",
                element: <Skills />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
