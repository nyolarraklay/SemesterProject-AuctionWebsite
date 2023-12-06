import * as templates from "./template/index.mjs";
import * as sort from "./template/sortedPosts.mjs";
import * as userInterface from "./userInterface/index.mjs";
import {
  clickShowListsButton,
  iconClick,
  mustLogIn,
  // viewProfile,
} from "./redirection/index.mjs";

import { isLoggedIn } from "./authentication/index.mjs";

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
  userInterface.submitUpdatePostListing();
  userInterface.deletePostListing();
}

if (path === "/src/html/listings.html") {
  if (isLoggedIn) {
    templates.renderView();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
}

if (path === "/src/html/homePage.html") {
  if (isLoggedIn) {
    templates.renderView();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
}

if (path === "/src/html/profilePage.html") {
  templates.renderProfilePage();
  userInterface.submitUpdateDataRegister();
  userInterface.updateLoginVisibility();
  userInterface.header();
}

if (path === "/src/html/profileListings.html") {
  templates.renderProfileListingsPage();
  userInterface.submitPostListing();
  userInterface.updateLoginVisibility();
  userInterface.header();
}
