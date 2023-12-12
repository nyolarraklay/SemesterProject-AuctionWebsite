import * as constant from "../constant/index.js";
import { headers } from "./headers.js";

const method = "post";

/**
 * This function will register user to API
 */
export async function registerToAPI(name, email, password, avatar) {
  const logInURL = constant.API_BASE_URL + constant.registerAction;

  const response = await fetch(logInURL, {
    method,
    body: JSON.stringify({ name, email, password, avatar }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
