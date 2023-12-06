import { isLoggedIn } from "../authentication/status.mjs";
import { logoutListener } from "../listener/authenticationListener/index.mjs";

export function header() {
  const body = document.querySelector("body");

  if (body.classList.contains("logged-in")) {
    const logButton = document.querySelector("#logButton");
    logButton.innerHTML = "logout";
    logButton.addEventListener("click", logoutListener);
    const profileButton = document.querySelector("#myProfile");
    profileButton.innerHTML = "";
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    const dropdownLink = document.createElement("a");
    dropdownLink.classList.add("btn", "btn-secondary", "dropdown-toggle");
    dropdownLink.href = "#";
    dropdownLink.role = "button";
    dropdownLink.setAttribute("data-bs-toggle", "dropdown");
    dropdownLink.setAttribute("aria-expanded", "false");
    dropdownLink.innerText = "VIEW PROFILE";
    dropdownLink.classList.add("fs-7");
    const dropdownList = document.createElement("ul");
    dropdownList.classList.add("dropdown-menu");
    const list1 = document.createElement("li");
    const profileLink = document.createElement("a");
    profileLink.href = "/src/html/profilePage.html";
    profileLink.innerText = "My Profile";
    profileLink.classList.add("fs-7", "text-decoration-none", "text-dark");
    list1.append(profileLink);
    const list2 = document.createElement("li");
    const listingsLink = document.createElement("a");
    listingsLink.href = "/src/html/profileListings.html";
    listingsLink.innerText = "My Listing";
    listingsLink.classList.add("fs-7", "text-decoration-none", "text-dark");
    list2.append(listingsLink);
    dropdownList.append(list1, list2);

    dropdown.append(dropdownLink, dropdownList);

    profileButton.append(dropdown);

    const membersPage = document.querySelector("#members");
    membersPage.innerHTML = "";
    const membersLink = document.createElement("a");
    membersLink.href = "/src/html/profileListings.html";
    membersLink.classList.add("nav-link");
    membersLink.innerText = "MEMBERS";
    membersPage.append(membersLink);
  }
}
