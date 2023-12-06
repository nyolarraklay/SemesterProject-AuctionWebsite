import { load } from "../storage/index.mjs";
import { getListings } from "../posts/userLists.mjs";
import { profileListingsTemplate } from "./profileListingsTemplate.mjs";

export async function renderProfileListingsPage() {
  const userProfileName = load("profile");
  const userName = userProfileName.name;

  try {
    const postData = await getListings(userName);
    const showData = postData.map(profileListingsTemplate);
    const container = document.querySelector(".listing");
    container.append(...showData);
  } catch (error) {
    error;
  }
}
