import React, { useContext } from "react";
import { WorkExperienceObj } from "../../components/workXPobj/workXPobj";
import { Loading } from "../../components";
import { WORK_EXP_QUERY } from "../../constants";
import { languageContext, staticTextContext } from "../../context/context";
import { useQuery } from "@apollo/client";
import "./workExperience.scss";
import parser from "html-react-parser";

export const WorkExperience = (props) => {
    const { loading, error, data } = useQuery(WORK_EXP_QUERY);
    const {language} = useContext(languageContext);
    const pageStaticTextModels = useContext(staticTextContext);

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

    const renderStaticHeader = (lang) => {
        if (pageStaticTextModels == undefined) return;
        let header = pageStaticTextModels?.find((model) => model.slug == "workexpstatictext")
            .localizations.find((loc) => loc.locale == lang);
        return parser(header.content.html);
    }

    return (
        <div className="work-exp">
            {renderStaticHeader(language)}
            {renderData(language).map((element, index) => (
                <WorkExperienceObj key={index} {...element} />
            ))}
        </div>
    );
};
