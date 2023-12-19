import React from "react";

export const Skill = ({
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
        <div>
            {name}
        </div>
    );
}