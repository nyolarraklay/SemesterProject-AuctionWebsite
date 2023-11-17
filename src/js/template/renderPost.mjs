import { singlePostTemplate } from "./singlePostTemplate.mjs";
import { getPost } from "../posts/viewLists.mjs";

export async function renderPostTemplate(id) {
  try {
    const publish = await getPost(id);
    const showContent = singlePostTemplate(publish);
    console.log(showContent);
    const container = document.querySelector(".API-title");
    container.append(showContent);
  } catch (error) {
    error;
  }
}
