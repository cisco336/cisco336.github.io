import React, {useContext} from "react";
import {ContactCompoent, Loading} from "../../components";
import { useQuery } from "@apollo/client";
import { CONTACT_QUERY } from "../../constants";
import { languageContext } from "../../context/context";
import "./contact.scss";

export const Contact = () => {
    const { loading, error, data } = useQuery(CONTACT_QUERY);
    const { language } = useContext(languageContext);

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error...</div>;
    }

    const renderData = (lang) => {
        return data.contactMeModels.map((d) => {
            console.log(d)
            return {
                ...d,
                content: d.localizations.find((loc) => loc.locale == lang).content,
            }
        })
    };

    return (
        <div className="contact-me__container">
            {renderData(language).map((d, index) => {
                return <ContactCompoent key={index} {...d} />;
            })}
        </div>
    );
}