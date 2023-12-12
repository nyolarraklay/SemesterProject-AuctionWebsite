import { singlePostTemplate } from "./singlePostTemplate.js";
import { getPost } from "../posts/viewLists.js";

export async function renderPostTemplate() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  try {
    const publish = await getPost(id);
    const showContent = singlePostTemplate(publish);
    const container = document.querySelector(".API-title");
    container.append(showContent);
  } catch (error) {
    error;
  }
}
