import { API_BASE_URL, logInAction } from "../constant/index.js";
import { save } from "../storage/index.js";
import { headers } from "./headers.js";
import { isLoggedIn } from "./status.js";

export async function login(
  email,
  password,
  redirectCallback = defaultRedirectCallback
) {
  const response = await fetch(`${API_BASE_URL}${logInAction}`, {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    const profile = await response.json();
    save("token", profile.accessToken);
    delete profile.accessToken;
    save("profile", profile);
    isLoggedIn();
    const pathToHomePage = "../../../src/html/homePage.html";
    redirectCallback(pathToHomePage);
    return profile;
  }
  const responseBody = await response.text();
  alert(`Error: ${response.statusText}\n${responseBody}`);
  throw new Error("User not registered");
}

export function defaultRedirectCallback(url) {
  window.location.href = url;
}
