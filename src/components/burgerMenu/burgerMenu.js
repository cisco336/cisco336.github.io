import React, { useState } from "react";
import { DataContext } from "../../context/context";
import { Link } from "react-router-dom";
import "./burgerMenu.scss";

export const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleClick = () => setShowMenu(!showMenu);
    return (
        <DataContext.Consumer>
            {({ navModels }) => {
                return (
                    <div className="burger-menu__wrapper">
                        <button
                            className="burger-menu__trigger"
                            onClick={handleClick}
                        >
                            Burger
                        </button>
                        {showMenu && (
                            <div className="burger-menu__menu">
                                {navModels.map((item, index) => (
                                    <Link to={item.link} key={index}>
                                        <button>{item.label}</button>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            }}
        </DataContext.Consumer>
    );
}