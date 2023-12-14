import * as templates from "../../template/index.js";

export function paginationPage2() {
  const pageOne = document.querySelector(".pageOne");
  const pageTwo = document.querySelector(".pageTwo");
  const pageThree = document.querySelector(".pageThree");
  const pageFour = document.querySelector(".pageFour");
  const pageFive = document.querySelector(".pageFive");
  pageTwo.addEventListener("click", function pagination() {
    const page = 2;
    pageTwo.classList.add("active");
    pageOne.classList.remove("active");
    pageThree.classList.remove("active");
    pageFive.classList.remove("active");
    pageFour.classList.remove("active");
    templates.renderMembersProfilePage(page);
  });
}

export function paginationPage1() {
  const pageOne = document.querySelector(".pageOne");
  const pageTwo = document.querySelector(".pageTwo");
  const pageThree = document.querySelector(".pageThree");
  const pageFour = document.querySelector(".pageFour");
  const pageFive = document.querySelector(".pageFive");
  pageOne.addEventListener("click", function pagination() {
    const page = 1;
    pageTwo.classList.remove("active");
    pageThree.classList.remove("active");
    pageFive.classList.remove("active");
    pageFour.classList.remove("active");
    templates.renderMembersProfilePage(page);
  });
}

export function paginationPage3() {
  const pageOne = document.querySelector(".pageOne");
  const pageTwo = document.querySelector(".pageTwo");
  const pageThree = document.querySelector(".pageThree");
  const pageFour = document.querySelector(".pageFour");
  const pageFive = document.querySelector(".pageFive");
  pageThree.addEventListener("click", function pagination() {
    const page = 3;
    pageOne.classList.remove("active");
    pageTwo.classList.remove("active");
    pageThree.classList.add("active");
    pageFive.classList.remove("active");
    pageFour.classList.remove("active");
    templates.renderMembersProfilePage(page);
  });
}

export function paginationPage4() {
  const pageOne = document.querySelector(".pageOne");
  const pageTwo = document.querySelector(".pageTwo");
  const pageThree = document.querySelector(".pageThree");
  const pageFour = document.querySelector(".pageFour");
  const pageFive = document.querySelector(".pageFive");
  pageFour.addEventListener("click", function pagination() {
    const page = 4;
    pageOne.classList.remove("active");
    pageTwo.classList.remove("active");
    pageThree.classList.remove("active");
    pageFive.classList.remove("active");
    pageFour.classList.add("active");
    templates.renderMembersProfilePage(page);
  });
}

export function paginationPage5() {
  const pageOne = document.querySelector(".pageOne");
  const pageTwo = document.querySelector(".pageTwo");
  const pageThree = document.querySelector(".pageThree");
  const pageFour = document.querySelector(".pageFour");
  const pageFive = document.querySelector(".pageFive");
  pageFive.addEventListener("click", function pagination() {
    const page = 5;
    pageOne.classList.remove("active");
    pageTwo.classList.remove("active");
    pageThree.classList.remove("active");
    pageFour.classList.remove("active");
    pageFive.classList.add("active");
    templates.renderMembersProfilePage(page);
  });
}
