import { load } from "../storage/index.js";
import { getProfile } from "../profile/getProfile.js";
import { profileTemplate } from "./profileTemplate.js";

export async function renderProfilePage() {
  const userProfileName = load("profile");
  const userName = userProfileName.name;

  try {
    const postData = await getProfile(userName);

    const showData = profileTemplate(postData);
    const container = document.querySelector(".profileContainer");
    container.append(showData);
  } catch (error) {
    error;
  }
}
