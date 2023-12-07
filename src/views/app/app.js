import React, { useEffect, useState } from "react";
import { Nav } from "../../components";
import { Outlet } from "react-router-dom";
import { fetchData } from "../../data/fetchData";
import { NAV_ITEMS } from "../../data/queries";

export const App = () => {
    const [navItems, setNavItems] = useState(null);

    useEffect(() => {
        const fetchNavItems = async () => {
            const { navModels } = await fetchData(
                NAV_ITEMS.query,
                NAV_ITEMS.key
            );

            setNavItems(navModels);
        };

        fetchNavItems();
    }, []);

    return (
        <>
            <Nav navItems={navItems}/>
            <div className="outlet">
                <Outlet />
            </div>
        </>
    );
};
