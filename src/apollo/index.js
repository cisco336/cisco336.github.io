import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";
import {hygraphLink} from "../constants";

export const hygraphClient = new ApolloClient({
    uri: hygraphLink,
    cache: new InMemoryCache(),
});