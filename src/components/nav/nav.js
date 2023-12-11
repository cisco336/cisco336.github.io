import React, { useContext } from "react";
import "./nav.scss";
import { DataContext } from "../../context/context";
import { BurgerMenu } from "../burgerMenu/burgerMenu";

export const Nav = () => {
    const { locale, setLocale } = useContext(DataContext);
    
    return (
        <nav>
            <button
                onClick={() => {
                    setLocale(locale == "es" ? "en" : "es");
                }}
            >
                Change locale: {locale}
            </button>
            <BurgerMenu />
        </nav>
    );
};
