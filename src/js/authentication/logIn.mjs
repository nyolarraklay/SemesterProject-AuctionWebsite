import { API_BASE_URL, logInAction } from "../constant/index.mjs";
import { headers } from "./headers.mjs";
import { save } from "../storage/index.mjs";

export async function login(email, password) {
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
    return profile;
  }

  throw new Error(response.statusText);
}
