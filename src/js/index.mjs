// import userInterface from "./userInterface/index.mjs";

// userInterface();

import * as templates from "./template/index.mjs";
import * as sort from "./template/sortedPosts.mjs";
import * as userInterface from "./userInterface/index.mjs";

// import * as templates from "./template/renderPost.mjs";

// const id = "8e0e1ea9-6990-4182-9a91-a5b52756b12a";

// templates.renderPostTemplate(id);

import {
  clickShowListsButton,
  iconClick,
  mustLogIn,
} from "./redirection/index.mjs";

const path = location.pathname;

clickShowListsButton();
iconClick();

setTimeout(mustLogIn, 100);

if (path === "/index.html") {
  userInterface.submitDataLogIn();
}

if (path === "/src/html/register.html") {
  userInterface.submitDataRegister();
}

if (path === "/src/html/details.html") {
  templates.renderPostTemplate();
}

if (path === "/src/html/listings.html") {
  templates.renderPostsTemplate();
  sort.renderSortedPostsTemplateOldtoNew();
  sort.renderSortedPostsTemplateNewtoOld();
  sort.renderSortedPostsTemplateHighestBid();
}

if (path === "/src/html/homePage.html") {
  templates.renderPostsTemplate();
  sort.renderSortedPostsTemplateOldtoNew();
  sort.renderSortedPostsTemplateNewtoOld();
  sort.renderSortedPostsTemplateHighestBid();
}
