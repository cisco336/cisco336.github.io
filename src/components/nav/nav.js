import React, { useContext, useEffect, useState, useRef } from "react";
import "./nav.scss";
import { BurgerMenu, Button, ProfilePicture, Switch } from "../";
import { NAV_QUERY, fetchData } from "../../constants";
import { languageContext } from "../../context/context";

export const Nav = () => {
    const [navModels, setNavModels] = useState([]);

    // To fetch data
    useEffect(() => {
        fetchData(NAV_QUERY).then((res) => {
            setNavModels(res.navModels);
        });
    }, []);

    // To change language
    const {language, setLanguage} = useContext(languageContext);
    useEffect(() => {}, [language]);

    const handleLangChange = () => {
        setLanguage(language === "en" ? "es" : "en");
    }

    return (
        <nav>
            <ProfilePicture />
            <div className="options">
                <Switch rLabel="ES" lLabel="EN" doubleState={true} callBack={handleLangChange}/>
                <BurgerMenu navModels={navModels} />
            </div>
        </nav>
    );
};
