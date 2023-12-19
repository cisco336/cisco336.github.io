import React, {useContext} from "react";
import { Skill } from "../../components";
import { SKILLS_QUERY } from "../../constants";
import { languageContext, staticTextContext } from "../../context/context";
import { useQuery } from "@apollo/client";
import { Loading } from "../../components";

export const Skills = (props) => {
    const { loading, error, data } = useQuery(SKILLS_QUERY);
    const { language } = useContext(languageContext);
    const pageStaticTextModels = useContext(staticTextContext);

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error: {error.message}</div>;
    }

    let categoryNames = [];
    let skillsObject = [];

    const renderData = (lang) => {

        let skillData = data.skillModels.map((d) => {
            let element = {
                name: d.name,
                details: d.details,
                content: d.localizations.find((loc) => loc.locale == lang),
            };
            return element;
        });

        let groupedSkills = skillData.reduce((acc, skill) => {
            const category = skill.details.category;

            if (!acc[category]) {
                acc[category] = [];
            }

            acc[category].push(skill);

            return acc;
        }, []);


        categoryNames = Object.keys(groupedSkills);

        return groupedSkills;
    };

    skillsObject = renderData(language);

    return (
        <div className="skills__container">
            {categoryNames.map((name, index) => {
                console.log(skillsObject)
                return (
                    <div key={index}>
                        <h3>{name}</h3>
                        {skillsObject[name].map((skill, idx) => {
                            return <Skill key={idx} {...skill} />;
                        })}
                    </div>
                );
            })}
        </div>
    );
};
