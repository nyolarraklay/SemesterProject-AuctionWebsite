import * as auth from "../../authentication/index.mjs";
import { updateLoginVisibility } from "../../userInterface/authentication.mjs";

export function logoutListener() {
  try {
    auth.logOut();
    updateLoginVisibility();
    location.href = "./";
  } catch {
    return alert("There was a problem logging out");
  }
}
