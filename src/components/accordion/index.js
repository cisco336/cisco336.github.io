import React, { useState } from "react";
import { Button } from "../index";
import "./accordion.scss";

export const Accordion = ({
    children,
    title = "",
    img = {
        url: "",
        fileName: "",
    },
    footer = "",
    footerIcon = "",
    bigIcon = "",
}) => {
    const [accordionState, setAccordionState] = useState(false);
    const handleHeaderClick = () => setAccordionState(!accordionState);

    return (
        <div className={`accordion__obj ${accordionState ? "open" : ""}`}>
            <Button
                type="text"
                callBack={handleHeaderClick}
                extraClass={`accordion__header ${accordionState ? "open" : ""}`}
            >
                <h3>{title}</h3>
                <div>
                    <i className="accordion__header--chevron icon icon-expand_more"></i>
                    {img.url !== "" ? (
                        <img src={img.url} title={img.fileName} />
                    ) : (
                        <i className={`icon-big icon icon-${bigIcon}`}></i>
                    )}
                </div>
            </Button>
            <div
                className={`accordion__content ${accordionState ? "open" : ""}`}
            >
                <div>
                    {children}
                    { footer !== "" &&
                        <small>
                            <p>{footer}</p>
                            <i className={`icon icon-${footerIcon}`}></i>
                        </small>
                    }
                </div>
            </div>
        </div>
    );
};