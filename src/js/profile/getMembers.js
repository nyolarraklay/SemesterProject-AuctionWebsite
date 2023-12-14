import * as constant from "../constant/index.js";
import { fetchTokens } from "../authentication/headers.js";

export async function getMembers(page = 1, limit = 100) {
  const offset = (page - 1) * limit;
  const getPostURL = `${constant.API_BASE_URL}${constant.allProfiles}?limit=${limit}&offset=${offset}&sort=name&sortOrder=asc`;

  const response = await fetchTokens(getPostURL);
  const registeredProfile = await response.json();
  if (response.ok) {
    return registeredProfile;
  }
}
