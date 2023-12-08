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
                    <h3>{entry.title}</h3>
                    <div>{parser(entry.content.html)}</div>
                </div>
            ))
        );
    }}</DataContext.Consumer>;
}
