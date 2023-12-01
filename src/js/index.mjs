import * as templates from "./template/index.mjs";
import * as sort from "./template/sortedPosts.mjs";
import * as userInterface from "./userInterface/index.mjs";
import {
  clickShowListsButton,
  iconClick,
  mustLogIn,
  viewProfile,
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

if (path === "/src/html/details.html") {
  viewProfile();
}

if (path === "/src/html/profilePage.html") {
  templates.renderProfilePage();
  userInterface.submitUpdateDataRegister();
}
