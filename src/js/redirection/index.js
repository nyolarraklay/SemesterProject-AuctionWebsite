export function clickShowListsButton() {
  const showListButton = document.querySelectorAll(".showLists");
  showListButton.forEach((redirect) => {
    redirect.addEventListener("click", function () {
      document.location.href = "../html/listings.html";
    });
  });
}

export function iconClick() {
  const iconLink = document.querySelector(".navbar-brand");
  iconLink.addEventListener("click", function () {
    document.location.href = "../html/homePage.html";
  });
}
