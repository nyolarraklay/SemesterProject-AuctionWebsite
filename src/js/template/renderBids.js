import { load } from "../storage/index.js";
import { getAllBids } from "../posts/userLists.js";
import { bidTemplate } from "./bidTemplate.js";

export async function renderBids() {
  const userProfileName = load("profile");
  const userName = userProfileName.name;

  try {
    const postData = await getAllBids(userName);
    const showData = postData.map(bidTemplate);
    const container = document.querySelector(".bids");
    container.append(...showData);
  } catch (error) {
    error;
  }
}
