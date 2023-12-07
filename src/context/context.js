import { request } from "graphql-request";
import { createContext } from "react";
import { ALL } from "./queries";

const link =
    "https://api-us-west-2.hygraph.com/v2/clharpja51mo001t7gejb0ssk/master";

export const defaultContext = { navModels: [], wXpModels: [] };
export const DataContext = createContext({...defaultContext});

export const getAppContext = () => request(link, ALL.query);