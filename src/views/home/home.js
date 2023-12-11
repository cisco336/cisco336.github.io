import React from "react";
import { DataContext } from "../../context/context";
import { Loading } from "../../components/loading/loading";
import parser from "html-react-parser";

export function Home() {
    return <DataContext.Consumer>{({ homeEntryModels }) => {
        return !homeEntryModels?.length ? (
            <Loading />
        ) : (
            homeEntryModels?.map((entry, index) => (
                <div key={index}>
                    {entry.commonData.localizations.map(loc => 
                        <>
                            <h2>{loc.locale}</h2>
                            <h3>{loc.name}</h3>
                            <div>{parser(loc.description.html)}</div>
                        </>    
                    )}
                </div>
            ))
        );
    }}</DataContext.Consumer>;
}
