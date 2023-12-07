import * as constant from "../constant/index.mjs";
import { fetchTokens } from "../authentication/headers.mjs";

export async function getListings(name) {
  const getPostURL = `${constant.API_BASE_URL}${constant.allProfiles}/${name}/listings`;

  const response = await fetchTokens(getPostURL);
  const registeredProfile = await response.json();
  if (response.ok) {
    return registeredProfile;
  }
}

export async function getAllBids(name) {
  const getPostURL = `${constant.API_BASE_URL}${constant.allProfiles}/${name}/bids?_listing=true`;

  const response = await fetchTokens(getPostURL);
  const registeredProfile = await response.json();
  if (response.ok) {
    return registeredProfile;
  }
}
