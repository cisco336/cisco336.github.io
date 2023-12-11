export const WORK_XP = {
    query: `
    {
      wXpModels {
          id
          organiztion
          position
          startDate
          endDate
          updatedAt
          companyLogo {
              fileName
              id
              url
              width
              height
          }
          content {
              html
          }
      }
  }
`,
    key: "wXpModels",
};

export const NAV_ITEMS = {
    query: `
  {
    navModels {
        label
        link
    }
  }
`,
    key: "navModels",
};

export const ALL = {
    query: `
    {
        navModels {
            label
            link
        }
        homeEntryModels {
            id
            commonData {
            localizations(includeCurrent: true) {
                name
                locale
                description {
                html
                }
            }
            }
        }
        wXpModels {
            id
            organiztion
            position
            startDate
            endDate
            updatedAt
            companyLogo {
                fileName
                id
                url
                width
                height
            }
            content {
                html
            }
        }
    }`,
};
