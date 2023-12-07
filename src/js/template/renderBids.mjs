import { load } from "../storage/index.mjs";
import { getAllBids } from "../posts/userLists.mjs";
import { bidTemplate } from "./bidTemplate.mjs";

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
