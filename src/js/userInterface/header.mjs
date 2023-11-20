import { logOutListener } from "../listener/authenticationListener/index.mjs";

export function header() {
  document
    .querySelectorAll("[data-auth=logout]")
    .forEach((e) => e.addEventListener("click", logOutListener));
}
