import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { DataContext } from "../../context/context";
import { Loading } from "../loading/loading";
import { BurgerMenu } from "../burgerMenu/burgerMenu";

export const Nav = () => {
    let context = DataContext
    
    return (
        <context.Consumer>
            {({ navModels }) => {
                if (!navModels.length) {
                    return <Loading />;
                }
                return (
                    <nav>
                        <ul>
                            {navModels.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <BurgerMenu />
                    </nav>
                );
            }}
        </context.Consumer>
    );
};
