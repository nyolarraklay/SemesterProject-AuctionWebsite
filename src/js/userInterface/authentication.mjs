import { load } from "../constant/index.mjs";

export function updateLoginVisibility() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}
