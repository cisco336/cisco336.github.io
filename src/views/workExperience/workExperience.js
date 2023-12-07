import React, { useEffect, useState } from "react";
import { WORK_XP } from "../../data/queries";
import { fetchData } from "../../data/fetchData";
import { WorkExperienceObj } from "../../components/workXPobj/workXPobj";

export const WorkExperience = (props) => {
    const [workExp, setWorkExp] = useState(null);

    useEffect(() => {
        const fetchWorkExp = async () => {
            const { wXpModels } = await fetchData(WORK_XP.query, WORK_XP.key);

            setWorkExp(wXpModels);
        };

        fetchWorkExp();
    }, []);

    let loading = <>Loading...</>
    return workExp == null
        ? loading
        : workExp.map((ex, i) => <WorkExperienceObj key={i} {...ex}/>);
};
