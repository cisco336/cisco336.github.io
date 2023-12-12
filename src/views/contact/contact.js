import React, { useState } from "react";
import {Loading} from "../../components";
import { CONTACT_QUERY, fetchData } from "../../constants";

export const Contact = () => {
    const [data, setData] = useState(null);

    useState(() => {
        fetchData(CONTACT_QUERY)
            .then(res => {
                setData(res.contactMeModels);
            })
    }, []);

    if (data == null) {
        return <Loading />
    }
    return (
    <div>
        {data.map((d, index) => (
            <a key={index} target="_blank" href={d.link}>{d.name}</a>
        ))}
    </div>);
}