import React, { useEffect, useState } from "react";
import { Footer, Nav } from "../../components";
import { Outlet } from "react-router-dom";
import { languageContext, staticTextContext } from "../../context/context";
import { ApolloProvider } from "@apollo/client";
import { hygraphClient } from "../../apollo";
import { STATIC_CONTENT } from "../../constants";

export const App = () => {

    const [language, setLanguage] = useState("en");
    const [staticText, setStaticText] = useState(staticTextContext);
    // console.log(process.env);

    useEffect(() => {
        hygraphClient.query({query:STATIC_CONTENT})
            .then(res => {
                setStaticText(res.data.pageStaticTextModels);
            })
            .catch(e => {
                console.log(e);
            })
    }, []);

    return (
        <ApolloProvider client={hygraphClient}>
            <staticTextContext.Provider value={staticText}>
                <languageContext.Provider value={{ language, setLanguage }}>
                    <Nav />
                        <div className="outlet">
                            <Outlet />
                        </div>
                    <Footer />
                </languageContext.Provider>
            </staticTextContext.Provider>
        </ApolloProvider>
    );
};
