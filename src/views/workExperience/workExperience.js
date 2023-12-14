import React, { useContext } from "react";
import { WorkExperienceObj } from "../../components/workXPobj/workXPobj";
import { Loading } from "../../components";
import { WORK_EXP_QUERY } from "../../constants";
import { languageContext } from "../../context/context";
import { useQuery } from "@apollo/client";

export const WorkExperience = (props) => {
    const { loading, error, data } = useQuery(WORK_EXP_QUERY);
    const {language} = useContext(languageContext);

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error...</div>;
    }

    const renderData = (lang) => {
        return data.wXpModels.map((d) =>
            d.localizations.find((loc) => loc.locale == lang)
        );
    };

    return (
        <div>
            {renderData(language).map((element, index) => <WorkExperienceObj key={index} {...element}/>)}
        </div>
        );
};
