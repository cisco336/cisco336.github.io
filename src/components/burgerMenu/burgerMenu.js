import React, { useContext, useEffect, useState, useRef } from "react";
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

    const { language } = useContext(languageContext);

    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                menuRef?.current &&
                !menuRef?.current.contains(event.target) &&
                !event.target.classList.contains("burger-menu__trigger")
            ) {
                setBurgerState("");
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuRef]);

    useEffect(() => {
    }, [language]);
    
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
            {
                <div
                    ref={menuRef}
                    className={`burger-menu__menu ${burgerState}`}
                >
                    {renderLinks(language).map((item, index) => (
                        <Link to={item.link} key={index}>
                            <Button
                                callBack={handleClick}
                                type="primary"
                                extraClass="tile"
                            >
                                <span>{item.label}</span>
                                <i className={`icon icon-${item.icon}`}></i>
                            </Button>
                        </Link>
                    ))}
                </div>
            }
        </div>
    );
};