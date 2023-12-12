import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./burgerMenu.scss";
import { languageContext } from "../../context/context";

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
            <button className="burger-menu__trigger" onClick={handleClick}>
                Burger
            </button>
            {showMenu && (
                <div className="burger-menu__menu">
                    {renderLinks(language).map((item, index) => (
                        <Link to={item.link} key={index}>
                            <button>{item.label}</button>
                        </Link>
                    ))}
                    <button onClick={() => setLanguage(language == "es" ? "en" : "es")}>
                        Change language
                    </button>
                </div>
            )}
        </div>
    );
};