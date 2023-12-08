import React, { useEffect, useState } from "react";
import { Nav } from "../../components";
import { Outlet } from "react-router-dom";
import { getAppContext } from "../../context/context";
import { DataContext, defaultContext } from "../../context/context";

export const App = () => {

    const [context, setContext] = useState({ ...defaultContext });

    useEffect(() => {
        const contextValue = async () => {
            const { navModels, wXpModels, homeEntryModels } =
                await getAppContext();
            setContext({ navModels, wXpModels, homeEntryModels });
        };
        contextValue();
    }, []);

    return (
        <DataContext.Provider value={context}>
                <Nav />
                <div className="outlet">
                    <Outlet />
                </div>
        </DataContext.Provider>
    );
};
