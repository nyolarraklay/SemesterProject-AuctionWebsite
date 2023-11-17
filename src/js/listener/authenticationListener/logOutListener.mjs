import * as auth from "../../authentication/index.mjs";
import { updateLoginVisibility } from "../../ui/auth.js";

export function logoutListener() {
  try {
    auth.logOut();
    updateLoginVisibility();
    location.href = "./";
  } catch {
    return alert("There was a problem logging out");
  }
}
