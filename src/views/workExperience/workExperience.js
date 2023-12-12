import React, { useContext, useEffect, useState } from "react";
import { WorkExperienceObj } from "../../components/workXPobj/workXPobj";
import { Loading } from "../../components";
import { WORK_EXP_QUERY, fetchData } from "../../constants";
import { languageContext } from "../../context/context";

export const WorkExperience = (props) => {
    const [data, setData] = useState(null);
    const {language} = useContext(languageContext);

    useEffect(() => {
        fetchData(WORK_EXP_QUERY)
            .then(response => {
                setData(response.wXpModels);
            })
    }, []);

    if (data == null) {
        return <Loading/>
    }

    const renderData = (lang) => {
        return data.map((d) =>
            d.localizations.find((loc) => loc.locale == lang)
        );
    };

    return (
        <div>
            {renderData(language).map((element, index) => <WorkExperienceObj key={index} {...element}/>)}
        </div>
        );
};
