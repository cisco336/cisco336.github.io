import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./burgerMenu.scss";
import { languageContext } from "../../context/context";
import { Button } from "../button/button";

export const BurgerMenu = ({ navModels }) => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => {
        setShowMenu(!showMenu);
    };
    const renderLinks = (language) => {
        return navModels.length ? 
            navModels.map(model => model.localizations.find(local => local.locale == language)) 
            : [];
    }

    const { language, setLanguage } = useContext(languageContext);

    useEffect(() => {
    }, [language])
    
    return (
        <div className="burger-menu__wrapper">
            <Button className="burger-menu__trigger" callBack={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </Button>
            {showMenu && (
                <div className="burger-menu__menu">
                    {renderLinks(language).map((item, index) => (
                        <Link to={item.link} key={index}>
                            <Button type="text">{item.label}</Button>
                        </Link>
                    ))}
                    <Button
                        callBack={() =>
                            setLanguage(language == "es" ? "en" : "es")
                        }
                        type="text"
                    >
                        Change language
                    </Button>
                </div>
            )}
        </div>
    );
};