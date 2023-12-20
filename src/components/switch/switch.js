import React, {useState, useEffect} from "react";
import { Button } from "../";
import "./switch.scss";

export const Switch = (
    {
        rLabel = "",
        lLabel = "",
        type = "primary",
        checked = false,
        doubleState = false,
        callBack = () => {},
    }
) => {
    const [state, setState] = useState(checked ? "checked" : "");
    const handleClick = () => {
        setState(state == "" ? "checked" : "");
        callBack();
    }


    return (
        <div className="switch__wrapper">
            {lLabel !== "" && <label className="switch__label">{lLabel}</label>}
            <div className={`switch__container ${doubleState ? "double" : ""} ${state}`} onClick={handleClick}>
                <Button extraClass={`switch__button ${state}`} />
            </div>
            {rLabel !== "" && <label className="switch__label">{rLabel}</label>}
        </div>
    );
}