import React from "react";
import parser from "html-react-parser";
import "./workXPobj.scss";

export const WorkExperienceObj = ({
    id,
    companyLogo,
    content,
    endDate,
    startDate,
    organiztion,
    position,
    updatedAt,
}) => {
    return (
        <div className="work-exp__obj">
            <div className="work-exp__header">
                <h3>{organiztion}</h3>
                <img></img>
            </div>
            <div>{parser(content.html)}</div>
            <small>{updatedAt}</small>
        </div>
    );
};