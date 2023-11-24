import { load } from "../storage/index.mjs";

import { logout } from "../authentication/logOut.mjs";
import { isLoggedIn } from "../authentication/status.mjs";

export function updateLoginVisibility() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}

export function updateLogButton() {
  if (isLoggedIn) {
    const loginButton = document.querySelector(".logButton");
    const profileButton = document.querySelector(".profile");
    profileButton.textContent = "Edit Profile";
    loginButton.textContent = "Logout";
    loginButton.addEventListener("click", logout());
  } else {
    const loginButton = document.querySelector(".logButton");
    const profileButton = document.querySelector(".profile");
    profileButton.textContent = "Register";
    loginButton.textContent = "Login";
  }
}
