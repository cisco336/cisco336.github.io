import React from "react";
import parser from "html-react-parser";
import { Accordion } from "../accordion";

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
        <Accordion
            title={organiztion}
            img={{ url: companyLogo.url, fileName: companyLogo.fileName }}
            footer={updatedAt}
            footerIcon="event_available"
        >
            {parser(content.html)}
        </Accordion>
    );
};