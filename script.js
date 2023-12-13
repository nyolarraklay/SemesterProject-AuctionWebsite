import * as templates from "./src/js/template/index.js";
import * as userInterface from "./src/js/userInterface/index.js";
import { clickShowListsButton, iconClick } from "./src/js/redirection/index.js";

import { isLoggedIn } from "./src/js/authentication/index.js";

import { authGuard, renderLoggedInView } from "./src/js/authGuard/index.js";

const baseUrl = "/SemesterProject-AuctionWebsite";
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

if (path === `${baseUrl}/src/html/homePage.html`) {
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

if (path === "/src/html/membersListing.html") {
  if (isLoggedIn) {
    templates.renderMembersListings();
    userInterface.updateLoginVisibility();
    userInterface.header();
    templates.renderBids();
  }
  authGuard(renderLoggedInView);
}
