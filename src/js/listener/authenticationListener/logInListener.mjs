import * as auth from "../../authentication/index.mjs";
import { updateLoginVisibility } from "../../userInterface/authentication.mjs";
import { updateLogButton } from "../../userInterface/index.mjs";

export async function logInListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  await auth.login(email, password);
  setTimeout(updateLogButton, 100);
}
