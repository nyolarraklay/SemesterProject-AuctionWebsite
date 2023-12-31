import * as templates from "./src/js/template/index.js";
import * as userInterface from "./src/js/userInterface/index.js";
import { clickShowListsButton, iconClick } from "./src/js/redirection/index.js";
import { isLoggedIn } from "./src/js/authentication/index.js";
import { authGuard, renderLoggedInView } from "./src/js/authGuard/index.js";
import * as pagination from "./src/js/pagination/members/membersPagination.js";

const path = location.pathname;

clickShowListsButton();
iconClick();

if (path.includes("/index.html")) {
  userInterface.submitDataLogIn();
}

if (path.includes("/src/html/register.html")) {
  userInterface.submitDataRegister();
}

if (path.includes("/src/html/details.html")) {
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

if (path.includes("/src/html/listings.html")) {
  if (isLoggedIn) {
    templates.renderView();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
}

if (path.includes("/src/html/homePage.html")) {
  if (isLoggedIn) {
    templates.renderView();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
}

if (path.includes("/src/html/profilePage.html")) {
  if (isLoggedIn) {
    templates.renderProfilePage();
    userInterface.submitUpdateDataRegister();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
  authGuard(renderLoggedInView);
}

if (path.includes("/src/html/profileListings.html")) {
  if (isLoggedIn) {
    templates.renderProfileListingsPage();
    templates.renderBids();
    userInterface.submitPostListing();
    userInterface.updateLoginVisibility();
    userInterface.header();
  }
  authGuard(renderLoggedInView);
}

if (path.includes("/src/html/membersPage.html")) {
  if (isLoggedIn) {
    templates.renderMembersProfilePage();
    userInterface.updateLoginVisibility();
    userInterface.header();

    pagination.paginationPage1();
    pagination.paginationPage2();
    pagination.paginationPage3();
    pagination.paginationPage4();
    pagination.paginationPage5();
  }
  authGuard(renderLoggedInView);
}

if (path.includes("/src/html/membersListing.html")) {
  if (isLoggedIn) {
    templates.renderMembersListings();
    userInterface.updateLoginVisibility();
    userInterface.header();
    templates.renderBids();
  }
  authGuard(renderLoggedInView);
}
