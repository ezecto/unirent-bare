export const getUserListing = /* GraphQL */ `
  query MyQuery($userId: ID!) {
    accommodationsByUserId(userId: $userId) {
      items {
        availableDate
        createdAt
        id
        images
        price
        propertyType
        rented
        title
        userId
        User {
          name
        }
      }
    }
  }
`;

export const fetchSearchAccommodation = (searchCriteria) => {
  const prefixQuery = "query searchAccommodation";

  const queryItemsString = `
      {
        items {
          availableDate
          createdAt
          id
          images
          price
          propertyType
          rented
          title
          userId
          User {
            name
          }
        }
      }
  `;

  const filterHDB = searchCriteria.HDB ? "{ propertyType: { eq: HDB } }" : "";
  const filterCondo = searchCriteria.CONDO
    ? "{ propertyType: { eq: CONDO } }"
    : "";
  const filterLanded = searchCriteria.LANDED
    ? "{ propertyType: { eq: LANDED } }"
    : "";

  const filterPropertyType =
    "or: [ " + filterHDB + filterCondo + filterLanded + " ]";

  const filterLatitude =
    "latitude: { between: [" +
    searchCriteria.minLat +
    ",  " +
    searchCriteria.maxLat +
    "] }";
  const filterLongitude =
    "longitude: { between: [" +
    searchCriteria.minLong +
    ",  " +
    searchCriteria.maxLong +
    "] }";

  const filterPrice =
    searchCriteria.minPrice && searchCriteria.maxPrice
      ? "price: { between: [" +
        searchCriteria.minPrice +
        ", " +
        searchCriteria.maxPrice +
        "] }"
      : "";

  const filterDate = searchCriteria.availableDate
    ? 'availableDate: { gt: "' + searchCriteria.availableDate + '" }'
    : "";

  const filter =
    "listAccommodations( filter: { " +
    filterPropertyType +
    filterLatitude +
    filterLongitude +
    filterPrice +
    filterDate +
    " } )";

  const query = prefixQuery + " { " + filter + queryItemsString + " } ";

  console.log(query);

  return query;
};
