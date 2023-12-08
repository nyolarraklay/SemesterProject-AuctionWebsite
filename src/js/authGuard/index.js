import { isLoggedIn } from "../authentication/index.js";

export const authGuard = (callback) => {
  if (isLoggedIn()) {
    callback();
  } else {
    console.log("User is not logged in. Redirecting to login page.");
    window.location.href = "/index.html";
  }
};

export const renderLoggedInView = () => {
  console.log("Rendering content for logged-in user.");
};
