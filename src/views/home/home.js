import React, { useContext, useEffect } from "react";
import { Loading } from "../../components/loading/loading";
import parser from "html-react-parser";
import { languageContext } from "../../context/context";
import { HOME_QUERY } from "../../constants";
import { useQuery } from "@apollo/client";
import "./home.scss";

export function Home() {
    const { loading, error, data } = useQuery(HOME_QUERY);
    const {language} = useContext(languageContext);

    useEffect(() => {}, [language]);

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error...</div>
    }

    const localizedData = (lang) => {
        return data.homeEntryModels.map((d) =>
            d.localizations.find((local) => local.locale == lang)
        );
    }

    return (
        <languageContext.Consumer>
            {({language}) => (
                localizedData(language).map((item, index) => (
                    <div className="home__wrapper" key={index}>
                        <h3>{item.title}</h3>
                        <div>{parser(item.description.html)}</div>
                    </div>
                ))
            )}
        </languageContext.Consumer>
    );
}
