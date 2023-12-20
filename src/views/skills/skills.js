import React, {useContext, useState} from "react";
import { Skill, Switch } from "../../components";
import { SKILLS_QUERY } from "../../constants";
import { languageContext, staticTextContext } from "../../context/context";
import { useQuery } from "@apollo/client";
import { Loading } from "../../components";
import "./skills.scss";

export const Skills = (props) => {
    const [filterBy, setFilterBy] = useState("category")
    const { loading, error, data } = useQuery(SKILLS_QUERY);
    const { language } = useContext(languageContext);

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error: {error.message}</div>;
    }

    let categoryNames = [];
    let familyNames = [];
    let skillsObjectGroupByCat = [];
    let skillsObjectGroupByFamily = [];

    const groupBy = (lang) => {

        let skillData = data.skillModels.map((d) => {
            let element = {
                name: d.name,
                details: {
                    ...d.details,
                    yearsOfExperience: d.details.localizations.find(
                        (l) => l.locale == language
                    ).yearsOfExperience,
                },
                content: d.localizations.find((loc) => loc.locale == lang),
            };
            return element;
        });

        let catGroupedSkills = skillData.reduce((acc, skill) => {
            const category = skill.details.category;

            if (!acc[category]) {
                acc[category] = [];
            }

            acc[category].push(skill);

            return acc;
        }, {});

        let familyGourpedSkills = skillData.reduce((acc, skill) => {
            const family = skill.details.family;

            if (!acc[family]) {
                acc[family] = [];
            }

            acc[family].push(skill);

            return acc;
        }, {})


        categoryNames = Object.keys(catGroupedSkills);
        familyNames = Object.keys(familyGourpedSkills);

        return {
            cat: catGroupedSkills,
            family: familyGourpedSkills,
        };
    };

    skillsObjectGroupByCat = groupBy(language).cat;
    skillsObjectGroupByFamily = groupBy(language).family;

    return (
        <div className="skills__container">
            {categoryNames.map((name, index) => {
                      return (
                          <div className="skills__category-family" key={index}>
                              <h3 className="skills__category-family__title">
                                  {name}{" "}
                                  <i
                                      className={`icon icon-${skillsObjectGroupByCat[name][0].details.categoryIcon}`}
                                  ></i>
                              </h3>
                              {skillsObjectGroupByCat[name].map(
                                  (skill, idx) => {
                                      return <Skill key={idx} {...skill} />;
                                  }
                              )}
                          </div>
                      );
                  })
            }
        </div>
    );
};
