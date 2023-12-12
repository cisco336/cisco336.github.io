import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../../components/loading/loading";
import parser from "html-react-parser";
import { languageContext } from "../../context/context";
import { fetchData, HOME_QUERY } from "../../constants";

export function Home() {
    const {language} = useContext(languageContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(HOME_QUERY)
            .then(res => {
                setData(res.homeEntryModels);
            })
    }, [language]);

    if (data == null) {
        return <Loading />
    }

    const localizedData = (lang) => {
        return data.map((d) =>
            d.localizations.find((local) => local.locale == lang)
        );
    }

    return (
        <languageContext.Consumer>
            {({language}) => (
                localizedData(language).map((item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <div>{parser(item.description.html)}</div>
                    </div>
                ))
            )}
        </languageContext.Consumer>
    );
}
