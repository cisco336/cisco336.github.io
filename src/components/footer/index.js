import React, {useContext} from "react";
import parser from "html-react-parser";
import { languageContext, staticTextContext } from "../../context/context";
import { CONTACT_QUERY } from "../../constants";
import { Loading } from "../index";
import { useQuery } from "@apollo/client";
import "./footer.scss";

export const Footer = () => {

    const { loading, error, data } = useQuery(CONTACT_QUERY);
    const pageStaticTextModels = useContext(staticTextContext);
    const {language} = useContext(languageContext);
    const img = { src: "", fileName: "" };

    const renderStaticContent = (lang) => {
        if (
            pageStaticTextModels === undefined ||
            !Array.isArray(pageStaticTextModels)
        )
            return;
        let model = pageStaticTextModels?.find(
            (model) => model.slug == "footerheader"
        );
        let footer = model.localizations.find((loc) => loc.locale == lang);
            img.src = model.img.url;
            img.title = model.img.fileName;
        return parser(footer.content.html);
    };

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error...</div>;
    }

    return (
        <div className="footer">
            {renderStaticContent(language)}
            <div className="footer__social">
                {data.contactMeModels.map((d, index) => (
                    <a key={index} target="_blank" href={d.link}>
                        <i className={`icon icon-${d.icon}`}></i>
                    </a>
                ))}
            </div>
            <img className="footer__img" src={img.src} title={img.fileName} />
        </div>
    );
}