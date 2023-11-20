import * as auth from "../../authentication/index.mjs";
import { updateLoginVisibility } from "../../userInterface/authentication.mjs";

export async function loginListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  try {
    const { name } = await auth.logIn(email, password);
    updateLoginVisibility();
    location.href = `./?view=profile&name=${name}`;
  } catch {
    return alert(
      "Either your username was not found or your password is incorrect"
    );
  }
}
