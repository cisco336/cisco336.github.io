import React from "react";
import "./loading.scss";

export const Loading = () => {
    return (
        <div className="loading__wrapper">
            <div className="loading__container">
                {[1, 2, 3, 4].map((e) => (
                    <span className="loading__dot"></span>
                ))}
            </div>
        </div>
    );
}