import { load } from "../storage/index.mjs";

export const isLoggedIn = () => {
  const token = load("token");
  return Boolean(token);
};
