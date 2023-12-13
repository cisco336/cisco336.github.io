import React, { useEffect, useState } from "react";
import "./nav.scss";
import { BurgerMenu, Button, ProfilePicture } from "../";
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
                <Button type="btn btn-icon-primary btn-icon-primary-outline">
                    <div>
                        <i className="icon icon-translate"></i>
                    </div>
                </Button>
                <BurgerMenu navModels={navModels} />
            </div>
        </nav>
    );
};
