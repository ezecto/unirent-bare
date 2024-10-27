import { API, Auth } from "aws-amplify";

const apiName = "accommodationApi";
const path = "/recommendation";

export async function getRecommendation(request) {
  const jwtToken = (await Auth.currentSession()).getAccessToken().getJwtToken();
  const headers = {
    Authorization: "Bearer " + jwtToken
  };
  const myInit = { headers: headers, body: request };

  try {
    const response = await API.post(apiName, path, myInit);
    return response;
  } catch (error) {
    console.error("Error in accommodation API: " + error);
  }
}
