import React, { useEffect, useState } from "react";
import "./nav.scss";
import { BurgerMenu } from "../burgerMenu/burgerMenu";
import { NAV_QUERY, fetchData } from "../../constants";
import { ProfilePicture } from "../profilePicture/profilePicture";

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
            <BurgerMenu navModels={navModels}/>
        </nav>
    );
};
