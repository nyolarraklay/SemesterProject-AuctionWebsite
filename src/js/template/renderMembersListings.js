import { getMembersPost } from "../posts/getMembersPost.js";
import { profileListingsTemplate } from "./profileListingsTemplate.js";

export async function renderMembersListings() {
  try {
    const postData = await getMembersPost();
    const showData = postData.map(profileListingsTemplate);
    const container = document.querySelector(".listing");
    container.append(...showData);
  } catch (error) {
    error;
  }
}
