import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { DataContext } from "../../context/context";

export const Nav = () => {
    let context = DataContext

    let loading = <div>Loading...</div>;
    
    return (
        <context.Consumer>
            {({ navModels }) => {
                if (!navModels.length) {
                    return loading;
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
