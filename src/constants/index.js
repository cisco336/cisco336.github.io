import request from "graphql-request";

const link =
    "https://api-us-west-2.hygraph.com/v2/clharpja51mo001t7gejb0ssk/master";

export const fetchData = (query) => request(link, query);

export const NAV_QUERY = `{
    navModels {
    localizations(includeCurrent: true) {
      link
      label
      locale
    }
  }
}`;