import * as auth from "../../authentication/index.mjs";

export function logoutListener() {
  try {
    auth.logout();
    location.href = "/index.html";
  } catch {
    return alert("There was a problem logging out");
  }
}
