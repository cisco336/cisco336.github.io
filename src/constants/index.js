import {gql} from "@apollo/client";

export const hygraphLink =
    "https://api-us-west-2.hygraph.com/v2/clharpja51mo001t7gejb0ssk/master";

export const NAV_QUERY = gql`query GetNavItems {
    navModels {
    localizations(includeCurrent: true) {
      link
      label
      locale
      icon
    }
  }
}`;

export const HOME_QUERY = gql`
  query GetHomeData {
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
  }
`;

export const CONTACT_QUERY = gql`
    query GetContactData {
        contactMeModels {
            icon
            img {
                url
            }
            link
            name
            localizations(includeCurrent: true) {
                content
                locale
            }
        }
    }
`;

export const WORK_EXP_QUERY = gql`query GetWorkExperience {
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

export const STATIC_CONTENT = gql`
    query StaticText {
        pageStaticTextModels {
            slug
            img {
                fileName
                url
            }
            icon
            localizations(includeCurrent: true) {
                locale
                title
                content {
                    html
                }
            }
        }
    }
`;

export const SKILLS_QUERY = gql`
    query GetSkills {
        skillModels {
            name
            details {
                categoryIcon
                category
                family
                familyIcon
                proficiency
                skillIcon
                yearsOfExp
            }
            localizations(includeCurrent: true) {
                description
                locale
            }
        }
    }
`;