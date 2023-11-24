// import userInterface from "./userInterface/index.mjs";

// userInterface();

import * as templates from "./template/renderPosts.mjs";
import * as sort from "./template/sortedPosts.mjs";
import userInterface from "./userInterface/index.mjs";

templates.renderPostsTemplate();

// import * as templates from "./template/renderPost.mjs";

// const id = "8e0e1ea9-6990-4182-9a91-a5b52756b12a";

// templates.renderPostTemplate(id);

import {
  clickShowListsButton,
  iconClick,
  mustLogIn,
} from "./redirection/index.mjs";

clickShowListsButton();
iconClick();

setTimeout(mustLogIn, 100);

sort.renderSortedPostsTemplateOldtoNew();
sort.renderSortedPostsTemplateNewtoOld();
sort.renderSortedPostsTemplateHighestBid();
userInterface();
