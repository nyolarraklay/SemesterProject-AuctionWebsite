import { API_BASE_URL, allProfiles } from "../constant/index.js";
import { fetchTokens } from "../authentication/headers.js";

export async function getMembersPost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const name = params.get("id");
  const getPostURL = `${API_BASE_URL}${allProfiles}/${name}/listings`;
  const response = await fetchTokens(getPostURL);
  const registeredMembers = await response.json();
  if (response.ok) {
    const members = document.querySelector(".membersListings");
    members.innerHTML = `${name} Listings`;
    return registeredMembers;
  }
}
