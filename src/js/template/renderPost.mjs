import { singlePostTemplate } from "./singlePostTemplate.mjs";
import { getPost } from "../posts/viewLists.mjs";

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
