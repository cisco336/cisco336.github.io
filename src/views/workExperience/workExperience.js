import React from "react";
import { WorkExperienceObj } from "../../components/workXPobj/workXPobj";
import { DataContext } from "../../context/context";

export const WorkExperience = (props) => {
    const context = DataContext;
    let loading = <>Loading...</>
    
    return (
        <context.Consumer>
            {({ wXpModels }) => {
                if (!wXpModels?.length) {
                    return loading;
                }

                return wXpModels.map((ex, i) => (
                    <WorkExperienceObj key={i} {...ex} />
                ));
            }}
        </context.Consumer>
    );
};
