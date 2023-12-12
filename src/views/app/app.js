import React, { useState } from "react";
import { Nav } from "../../components";
import { Outlet } from "react-router-dom";
import { languageContext } from "../../context/context";

export const App = () => {

    const [language, setLanguage] = useState("en");

    return (
        <languageContext.Provider value={{language, setLanguage}}>
            <Nav/>
            <div className="outlet">
                <Outlet />
            </div>
        </languageContext.Provider>
    );
};
