import { load } from "../storage/index.mjs";

export function updateLoginVisibility() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}
