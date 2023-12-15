import React, {useContext} from "react";
import parser from "html-react-parser";
import { languageContext, staticTextContext } from "../../context/context";
import "./footer.scss";

export const Footer = () => {

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

    return <div className="footer">{renderStaticContent(language)}<img src={img.src} title={img.fileName}/></div>;
}