import * as constant from "../constant/index.mjs";
import { headers } from "./headers.mjs";

const method = "post";

/**
 * This function will register user to API
 */
export async function registerToAPI() {
  const logInURL = constant.API_BASE_URL + constant.registerAction;

  const profile = {
    name: "klay", // Required
    email: "klay@stud.noroff.no", // Required
    password: "password", // Required
    avatar: "", // Optional
  };

  const response = await fetch(logInURL, {
    headers: headers("application/json"),
    method,
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
