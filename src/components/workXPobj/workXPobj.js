import React, { useState } from "react";
import parser from "html-react-parser";
import { Button } from "../index";
import "./workXPobj.scss";

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

    const [accordionState, setAccordionState] = useState(false);
    const handleHeaderClick = () => setAccordionState(!accordionState);
    
    return (
        <div className={`work-exp__obj ${accordionState ? "open" : ""}`}>
            <Button
                type="text"
                callBack={handleHeaderClick}
                extraClass={`work-exp__header ${accordionState ? "open" : ""}`}
            >
                <h3>{organiztion}</h3>
                <img src={companyLogo.url} title={companyLogo.fileName} />
            </Button>
            <div
                className={`work-exp__content ${accordionState ? "open" : ""}`}
            >
                <div>
                    {parser(content.html)}
                    <small>
                        <p>{updatedAt}</p>
                        <i className="icon icon-calendar_today"></i>
                    </small>
                </div>
            </div>
        </div>
    );
};