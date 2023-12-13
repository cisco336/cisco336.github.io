import React, {useState, useEffect} from "react";
import { Button } from "../";
import "./switch.scss";

export const Switch = (
    {
        rLabel = "",
        lLabel = "",
        type = "primary",
        checked = false,
        callback = () => {},
    }
) => {
    const [state, setState] = useState("");
    const handleClick = () => {
        setState(state == "" ? "checked" : "");
    }


    return (
        <div className="switch__wrapper">
            {lLabel !== "" && <label className="switch__label">{lLabel}</label>}
            <div className={`switch__container ${state}`} onClick={handleClick}>
                <Button callBack={callback} extraClass={`switch__button ${state}`} />
            </div>
            {rLabel !== "" && <label className="switch__label">{rLabel}</label>}
        </div>
    );
}