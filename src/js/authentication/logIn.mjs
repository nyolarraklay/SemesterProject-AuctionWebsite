import { API_BASE_URL, logInAction } from "../constant/index.mjs";
import { save } from "../storage/index.mjs";
import { headers } from "./headers.mjs";
import { isLoggedIn } from "./status.mjs";

export async function login(email, password) {
  const response = await fetch(`${API_BASE_URL}${logInAction}`, {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: headers("application/json"),
  });

  const { accessToken, ...user } = await response.json();
  save("token", accessToken);
  save("profile", user);

  if (response.ok) {
    document.location.href = "src/html/homePage.html";
    isLoggedIn();
  } else {
    alert(
      "You are not registered. Please check if your email and password are correct. "
    );
  }

  throw new Error(response.statusText);
}
