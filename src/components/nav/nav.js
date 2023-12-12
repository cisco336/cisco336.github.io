import React, { useEffect, useState } from "react";
import "./nav.scss";
import { BurgerMenu } from "../burgerMenu/burgerMenu";
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
            <BurgerMenu navModels={navModels}/>
        </nav>
    );
};
