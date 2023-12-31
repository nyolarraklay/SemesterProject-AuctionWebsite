import * as constant from "../constant/index.js";
import { fetchTokens } from "../authentication/headers.js";

export async function getProfile(name) {
  const getPostURL = `${constant.API_BASE_URL}${constant.allProfiles}/${name}`;

  const response = await fetchTokens(getPostURL);
  const registeredProfile = await response.json();
  if (response.ok) {
    return registeredProfile;
  }
}
