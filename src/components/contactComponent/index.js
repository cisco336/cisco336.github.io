import React from "react";
import "./contactComponent.scss";

export const ContactCompoent = (
    {
        icon = "",
        link = "",
        img = {url: "", title: ""},
        content = "",
        name = ""
    }
) => {
    return (
        <a className="contact-me__wrapper" target="_blank" href={link}>
            <i className={`contact-me__icon icon icon-${icon}`}></i>
            <p className="contact-me__text">{content}</p>
        </a>
    );
}