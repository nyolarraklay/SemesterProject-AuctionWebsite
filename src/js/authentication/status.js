import { load } from "../storage/index.js";

export const isLoggedIn = () => {
  const token = load("token");
  return Boolean(token);
};
