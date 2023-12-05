import * as auth from "../../authentication/index.mjs";

export async function logInListener(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  await auth.login(email, password);
}
