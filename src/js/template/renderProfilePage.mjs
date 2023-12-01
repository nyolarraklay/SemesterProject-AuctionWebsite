import { load } from "../storage/index.mjs";
import { getProfile } from "../profile/getProfile.mjs";
import { profileTemplate } from "./profileTemplate.mjs";

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
