import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./burgerMenu.scss";
import { languageContext } from "../../context/context";
import { Button } from "../button/button";

export const BurgerMenu = ({ navModels }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [burgerState, setBurgerState] = useState("");

    const handleClick = () => {
        setShowMenu(!showMenu);
        setBurgerState(burgerState == "" ? "active" : "");
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
            <Button
                extraClass={`burger-menu__trigger ${burgerState}`}
                callBack={handleClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </Button>
            {(
                <div className={`burger-menu__menu ${burgerState}`}>
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