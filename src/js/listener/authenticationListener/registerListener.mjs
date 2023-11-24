import * as auth from "../../authentication/index.mjs";

export function registerListener(event) {
  const registerForm = document.querySelector("form#registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const registerNewUser = event.target;
      const registerData = new FormData(registerNewUser);
      const email = registerData.get("email");
      const name = registerData.get("name");
      const password = registerData.get("password");
      const avatar = registerData.get("avatar");

      try {
        auth.registerToAPI(name, email, password, avatar);
      } catch {
        return alert("There was a problem creating your account");
      }
    });
  }
}
