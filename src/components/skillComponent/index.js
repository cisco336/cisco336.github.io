import React from "react";
import { Accordion } from "../accordion";

export const Skill = ({
    children,
    name = "",
    content = { description: "" },
    details = {
        categoryIcon: "",
        category: "",
        family: "",
        familyIcon: "",
        proficiency: "",
        skillIcon: "",
        yearsOfExperience: "",
    },
}) => {

    return (
        <Accordion
            title={name}
            bigIcon={details.skillIcon}
            footer={details.yearsOfExperience}
            footerIcon="cool2"
        >
            {content.description}
        </Accordion>
    );
};