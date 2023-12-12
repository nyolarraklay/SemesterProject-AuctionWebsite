import { clear } from "../tools/clear.js";

export function renderView() {
  const main = document.querySelector("main");
  clear(main);
  main.append(...arguments);
}
