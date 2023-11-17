import { postsTemplate } from "./postsTemplate.mjs";
import { getPosts } from "../posts/viewLists.mjs";

export async function renderPostsTemplate() {
  try {
    const publish = await getPosts();

    const publishContent = publish.map(postsTemplate);
    const container = document.querySelector(".API-title");
    container.append(...publishContent);
  } catch (error) {
    error;
  }
}
