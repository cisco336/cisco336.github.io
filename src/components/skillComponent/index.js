import React from "react";
import { Accordion } from "../accordion";

export const Skill = ({
        children,
        name = "",
        content = { description: ""  },
        details = {
            categoryIcon: "",
            category: "",
            family: "",
            familyIcon: "",
            proficiency: "",
            skillIcon: "",
            yearsOfExp: null
         } 
    }) => {

    return (
        <Accordion
            title={name}
            bigIcon={details.skillIcon}
        >
            {content.description}
        </Accordion>
    );
}