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
    redirectCallback("/src/html/homePage.html");
    return profile;
  }

  throw new Error(response.statusText);
}

export function defaultRedirectCallback(url) {
  window.location.href = url;
}
