import { postsTemplate } from "./postsTemplate.js";
import { getPosts } from "../posts/viewLists.js";
import { searchPostsSetUp } from "../sort/index.js";

export async function renderPostsTemplate() {
  try {
    const publish = await getPosts();

    const publishContent = publish.map(postsTemplate);
    const container = document.querySelector(".API-title");
    container.append(...publishContent);
    searchPostsSetUp(publish);
    setTimeout(mustLogIn, 100);
  } catch (error) {
    error;
  }
}
