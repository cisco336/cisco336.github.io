import React from "react";
import { Loading } from "../../components/loading/loading";
import parser from "html-react-parser";

export function Home() {
    // return <DataContext.Consumer>{({ locale, homeEntryModels }) => {
    //     return !homeEntryModels?.length ? (
    //         <Loading />
    //     ) : (
    //         homeEntryModels?.map((entry, index) => (
    //             <div key={index}>
    //                 {entry.commonData.localizations
    //                     .map((loc, index) => {
    //                         return loc.locale != locale ? null : <div key={index}>
    //                             <h3>{loc.name}</h3>
    //                             <div>{parser(loc.description.html)}</div>
    //                         </div>;
    //                     })}
    //             </div>
    //         ))
    //     );
    // }}</DataContext.Consumer>;
    return (<div></div>)
}
