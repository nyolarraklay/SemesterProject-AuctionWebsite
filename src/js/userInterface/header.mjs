import { isLoggedIn } from "../authentication/status.mjs";
import { logoutListener } from "../listener/authenticationListener/index.mjs";

export function header() {
  const body = document.querySelector("body");

  if (body.classList.contains("logged-in")) {
    const logButton = document.querySelector("#logButton");
    logButton.innerHTML = "logout";
    logButton.addEventListener("click", logoutListener);
    const profileButton = document.querySelector("#myProfile");
    profileButton.innerHTML = "";
    const profileLink = document.createElement("a");
    profileLink.href = "/src/html/profilePage.html";
    profileLink.innerText = "VIEW PROFILE";
    profileLink.style.textDecoration = "none";
    profileLink.style.color = "black";
    profileButton.append(profileLink);
  }
}
