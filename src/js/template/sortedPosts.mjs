import { postsTemplate } from "./postsTemplate.mjs";
import { getPosts } from "../posts/viewLists.mjs";
import {
  sortPostsNewestToOldest,
  sortPostsOldestToNewest,
  sortPostsBiggestBid,
} from "../sort/index.mjs";
import { mustLogIn } from "../redirection/index.mjs";

export async function renderSortedPostsTemplateOldtoNew() {
  try {
    const publish = await getPosts();
    const container = document.querySelector(".API-title");
    const sortOngoing = document.querySelector(".ongoing");
    sortOngoing.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostsOldestToNewest(publish);
      const sortedPostContent = sortedPost.map(postsTemplate);
      container.innerHTML = "";
      container.append(...sortedPostContent);
      setTimeout(mustLogIn, 100);
    });
  } catch (error) {
    error;
  }
}

export async function renderSortedPostsTemplateNewtoOld() {
  try {
    const publish = await getPosts();
    const container = document.querySelector(".API-title");
    const sortUpcoming = document.querySelector(".upcoming");
    sortUpcoming.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostsNewestToOldest(publish);
      const sortedPostContent = sortedPost.map(postsTemplate);
      container.innerHTML = "";
      container.append(...sortedPostContent);
      setTimeout(mustLogIn, 100);
    });
  } catch (error) {
    error;
  }
}

export async function renderSortedPostsTemplateHighestBid() {
  try {
    const publish = await getPosts();
    const container = document.querySelector(".API-title");
    const sortHighestBid = document.querySelector(".featured");
    sortHighestBid.addEventListener("click", function (event) {
      event.preventDefault();
      const sortedPost = sortPostsBiggestBid(publish);
      const sortedPostContent = sortedPost.map(postsTemplate);
      container.innerHTML = "";
      container.append(...sortedPostContent);
      setTimeout(mustLogIn, 100);
    });
  } catch (error) {
    error;
  }
}
