import { API, Auth } from "aws-amplify";

const apiName = "googleMapsApi";
const path = "/geocoding";

export async function getGeocode(request) {
  const jwtToken = (await Auth.currentSession()).getAccessToken().getJwtToken();
  const headers = {
    Authorization: "Bearer " + jwtToken
  };

  const myInit = { headers: headers, body: request };

  try {
    const response = await API.post(apiName, path, myInit);
    return response;
  } catch (error) {
    console.error("Error in google maps API: " + error);
  }
}

export async function getGeocodeByPlaceId(query: string) {
  const jwtToken = (await Auth.currentSession()).getAccessToken().getJwtToken();

  const geo = {
    lat: null,
    lng: null,
  };

  const myInit = {
    headers: {
      Authorization : "Bearer " + jwtToken
    }, 
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {
      placeId: query, // OPTIONAL
    },
  };

  try {
    const response = await API.get(apiName, path, myInit);
    console.log(response);
    if (response) {
      geo.lat = response.data.geometry.location.lat;
      geo.lng = response.data.geometry.location.lng;
    }

    return geo;
  } catch (error) {
    console.error("Error in accommodation API: " + error);
  }
}
