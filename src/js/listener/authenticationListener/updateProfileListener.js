import { updateProfile } from "../../profile/editProfile.js";
import { save, load } from "../../storage/index.js";

export async function setUpdateProfileListener(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const avatar = formData.get("avatar");

  try {
    const result = await updateProfile(avatar);
    if (result) {
      location.href = "../html/profilePage.html";
      const oldProfile = load("profile");
      oldProfile.avatar = avatar;
      save("profile", oldProfile);
    } else {
      alert("Error");
    }
  } catch (error) {
    return alert("There was a problem creating your account");
  }
}
