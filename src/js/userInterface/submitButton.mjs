import {
  logInListener,
  registerListener,
} from "../listener/authenticationListener/index.mjs";

export const submitDataLogIn = () => {
  document
    .querySelector("form#loginForm")
    .addEventListener("submit", logInListener);
};
export const submitDataRegister = () => {
  const register = document.querySelector("form#registerForm");
  register.addEventListener("submit", registerListener);
};
