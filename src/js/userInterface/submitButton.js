import {
  logInListener,
  registerListener,
  setUpdateProfileListener,
  logoutListener,
} from "../listener/authenticationListener/index.js";
import {
  bidListener,
  postListener,
  updatePostListener,
} from "../listener/posts/index.js";
import { load } from "../storage/load.js";
import { deletePost } from "../posts/delete.js";

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

export async function logOutWebsite() {
  const logOutButton = document.querySelector(".logOutButton");
  logOutButton.addEventListener("click", logoutListener());
}

export const submitPostListing = () => {
  const register = document.querySelector("form#newPost");
  register.addEventListener("submit", postListener);
};

export const submitUpdatePostListing = () => {
  const register = document.querySelector("form#editPost");
  register.addEventListener("submit", updatePostListener);
};

export const deletePostListing = () => {
  const deleteButton = document.querySelector(".deleteButton");
  deleteButton.addEventListener("click", deletePost);
};

export const submitBid = () => {
  const register = document.querySelector("form#bidForm");
  register.addEventListener("submit", bidListener);
};
