import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

export const Nav = ({ navItems }) => {

    let loading = <div>Loading...</div>;

    return navItems == null ? (
        loading
    ) : (
        <nav>
            {navItems.map((item, index) => (
                <li key={index}>
                    <Link to={item.link}>{item.label}</Link>
                </li>
            ))}
        </nav>
    );
};
