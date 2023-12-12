import React from "react";
import parser from "html-react-parser";
import "./workXPobj.scss";
import { Loading } from "../loading/loading";

export const WorkExperienceObj = ({
    locale,
    currentJob,
    companyLogo,
    organiztion,
    position,
    startDate,
    endDate,
    content,
    updatedAt
}) => {
    
    return (
        <div className="work-exp__obj">
            <div className="work-exp__header">
                <h3>{organiztion}</h3>
            </div>
            <div>{parser(content.html)}</div>
            <small>{updatedAt}</small>
        </div>
    );
};