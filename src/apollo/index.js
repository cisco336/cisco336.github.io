import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";
import {hygraphLink, hygraphAssetsLink} from "../constants";

export const hygraphClient = new ApolloClient({
    uri: hygraphLink,
    cache: new InMemoryCache(),
});