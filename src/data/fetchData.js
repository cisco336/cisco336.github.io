import { request } from "graphql-request";

const link =
    "https://api-us-west-2.hygraph.com/v2/clharpja51mo001t7gejb0ssk/master";

export const fetchData = (query, key) => {
  return request(link, query)
};