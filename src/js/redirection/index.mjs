import { isLoggedIn } from "../authentication/status.mjs";

export function clickShowListsButton() {
  const showListButton = document.querySelectorAll(".card-footer button");
  showListButton.forEach((redirect) => {
    redirect.addEventListener("click", function () {
      document.location.href = "listings.html";
    });
  });
}

export function iconClick() {
  const iconLink = document.querySelector(".navbar-brand");
  iconLink.addEventListener("click", function () {
    document.location.href = "homePage.html";
  });
}

export function mustLogIn() {
  const bidNow = document.querySelectorAll(".bidNow button");

  bidNow.forEach((redirect) => {
    redirect.addEventListener("click", function () {
      if (isLoggedIn) {
        document.location.href = "/index.html";
      } else {
        alert("You need to be logged in to access this page.");
      }
    });
  });
}
