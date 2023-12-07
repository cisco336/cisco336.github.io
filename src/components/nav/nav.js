import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { DataContext } from "../../context/context";
import { Loading } from "../loading/loading";

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
                        {navModels.map((item, index) => (
                            <li key={index}>
                                <Link to={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </nav>
                );
            }}
        </context.Consumer>
    );
};
