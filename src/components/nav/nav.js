import React, { useContext, useEffect } from "react";
import "./nav.scss";
import { BurgerMenu, ProfilePicture, Switch } from "../";
import { NAV_QUERY } from "../../constants";
import { languageContext } from "../../context/context";
import { useQuery } from "@apollo/client";
import { Loading } from "../";

export const Nav = () => {
    const { loading, error, data } = useQuery(NAV_QUERY);

    // To change language
    const {language, setLanguage} = useContext(languageContext);
    useEffect(() => {}, [language]);

    const handleLangChange = () => {
        setLanguage(language === "en" ? "es" : "en");
    }

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error...</div>;
    }

    return (
        <nav>
            <ProfilePicture />
            <div className="options">
                <Switch
                    rLabel="ES"
                    lLabel="EN"
                    doubleState={true}
                    callBack={handleLangChange}
                />
                <BurgerMenu navModels={data.navModels} />
            </div>
        </nav>
    );
};
