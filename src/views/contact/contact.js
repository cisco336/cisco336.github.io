import React from "react";
import {Loading} from "../../components";
import { useQuery } from "@apollo/client";
import { CONTACT_QUERY } from "../../constants";

export const Contact = () => {
    const { loading, error, data } = useQuery(CONTACT_QUERY);

    if (loading) {
        return <Loading />;
    }

    if (error !== undefined) {
        return <div>Error...</div>;
    }

    return (
        <div>
            {data.contactMeModels.map((d, index) => (
                <a key={index} target="_blank" href={d.link}>
                    {d.name}
                </a>
            ))}
        </div>
    );
}