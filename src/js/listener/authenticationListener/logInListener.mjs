import * as auth from "../../authentication/index.mjs";
import { updateLoginVisibility } from "../../userInterface/authentication.mjs";

export async function logInListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");

  try {
    auth.login(email, password);
    updateLoginVisibility();
    // location.href = "src/html/listings-loggedIn.html";
  } catch {
    return alert(
      "Either your username was not found or your password is incorrect"
    );
  }
}
