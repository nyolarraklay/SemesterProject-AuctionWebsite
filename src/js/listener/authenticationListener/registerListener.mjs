import * as auth from "../../authentication/index.mjs";

export async function registerListener(event) {
  event.preventDefault();
  const registerNewUser = event.target;
  const registerData = new FormData(registerNewUser);
  const email = registerData.get("email");
  const name = registerData.get("name");
  const password = registerData.get("password");
  const avatar = registerData.get("avatar");

  try {
    await auth.registerToAPI(name, email, password, avatar);
  } catch {
    return alert("There was a problem creating your account");
  }
  try {
    await auth.login(email, password);
  } catch {
    return alert("There was a problem logging into your new account");
  }
}
