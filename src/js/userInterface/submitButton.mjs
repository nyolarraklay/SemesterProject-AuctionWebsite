import {
  logInListener,
  registerListener,
  setUpdateProfileListener,
} from "../listener/authenticationListener/index.mjs";
import { load } from "../storage/load.mjs";

export const submitDataLogIn = () => {
  document
    .querySelector("form#loginForm")
    .addEventListener("submit", logInListener);
};

export const submitDataRegister = () => {
  const register = document.querySelector("form#registerForm");
  register.addEventListener("submit", registerListener);
};

export const submitUpdateDataRegister = () => {
  const updateRegistry = document.querySelector("#updateRegisterForm");
  if (updateRegistry) {
    const { name, email } = load("profile");
    updateRegistry.name.value = name;
    updateRegistry.email.value = email;
    const inputName = updateRegistry.querySelector("#registerName");
    inputName.disabled = true;
    const inputEmail = updateRegistry.querySelector("#registerEmail");
    inputEmail.disabled = true;
  }
  updateRegistry.addEventListener("submit", setUpdateProfileListener);
};
