import { clear } from "../tools/clear.mjs";

export function renderView() {
  const main = document.querySelector("main");
  clear(main);
  main.append(...arguments);
}
