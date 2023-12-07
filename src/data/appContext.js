import { createContext } from "react";
import { fetchData } from "./fetchData";
import { ALL } from "./queries";

export const getAppContext = () => {
    return fetchData(ALL, null);
};