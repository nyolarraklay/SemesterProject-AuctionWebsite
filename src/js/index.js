import * as templates from "./template/index.js";
import * as userInterface from "./userInterface/index.js";
import { clickShowListsButton, iconClick } from "./redirection/index.js";

import { isLoggedIn } from "./authentication/index.js";

import { authGuard, renderLoggedInView } from "./authGuard/index.js";

const path = location.pathname;

clickShowListsButton();
iconClick();

if (path === "/index.html") {
  userInterface.submitDataLogIn();
}

if (path === "/src/html/register.html") {
  userInterface.submitDataRegister();
}

if (path === "/src/html/details.html") {
  if (isLoggedIn) {
    templates.renderPostTemplate();
    userInterface.submitUpdatePostListing();
    userInterface.deletePostListing();
    userInterface.updateLoginVisibility();
    userInterface.header();
    userInterface.submitBid();
  }
  authGuard(renderLoggedInView);
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
  if (isLoggedIn) {
    templates.renderProfilePage();
    userInterface.submitUpdateDataRegister();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
  authGuard(renderLoggedInView);
}

if (path === "/src/html/profileListings.html") {
  if (isLoggedIn) {
    templates.renderProfileListingsPage();
    templates.renderBids();
    userInterface.submitPostListing();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
  authGuard(renderLoggedInView);
}

if (path === "/src/html/membersPage.html") {
  if (isLoggedIn) {
    templates.renderMembersProfilePage();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
  authGuard(renderLoggedInView);
}