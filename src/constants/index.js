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

export const HOME_QUERY = `{
  homeEntryModels {
    localizations(includeCurrent: true) {
      title
      updatedAt
      locale
      description {
        html
      }
    }
  }
}`;

export const CONTACT_QUERY = `{
  contactMeModels {
    icon
    img {
      fileName
      height
      width
      url
    }
    link
    name
  }
}`;

export const WORK_EXP_QUERY = `{
  wXpModels {
    localizations(includeCurrent: true) {
      locale
      currentJob
      companyLogo {
        fileName
        height
        url
        width
      }
      organiztion
      position
      startDate
      endDate
      content {
        html
      }
      updatedAt
    }
  }
}`;