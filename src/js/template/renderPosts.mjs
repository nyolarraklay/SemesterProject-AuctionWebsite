import { postsTemplate } from "./postsTemplate.mjs";
import { getPosts } from "../posts/viewLists.mjs";
import { searchPostsSetUp } from "../sort/index.mjs";

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
