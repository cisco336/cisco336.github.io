import React, { useState } from "react";
import { Nav } from "../../components";
import { Outlet } from "react-router-dom";
import { languageContext } from "../../context/context";
import { ApolloProvider } from "@apollo/client";
import { hygraphClient } from "../../apollo";

export const App = () => {

    const [language, setLanguage] = useState("en");

    return (
        <ApolloProvider client={hygraphClient}>
            <languageContext.Provider value={{ language, setLanguage }}>
                <Nav />
                <div className="outlet">
                    <Outlet />
                </div>
            </languageContext.Provider>
        </ApolloProvider>
    );
};
