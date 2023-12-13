import React, { useEffect, useState } from "react";
import "./nav.scss";
import { BurgerMenu, Button, ProfilePicture, Switch } from "../";
import { NAV_QUERY, fetchData } from "../../constants";

export const Nav = () => {
    const [navModels, setNavModels] = useState([]);

    useEffect(() => {
        fetchData(NAV_QUERY).then((res) => {
            setNavModels(res.navModels);
        });
    }, []);
    return (
        <nav>
            <ProfilePicture />
            <div className="options">
                <Switch />
                <BurgerMenu navModels={navModels} />
            </div>
        </nav>
    );
};
