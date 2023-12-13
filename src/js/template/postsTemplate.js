import { updateCountdown } from "../tools/clear.js";

export function postsTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card", "mb-3", "col", "cardBG");

  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "justify-content-between"
  );

  const post = document.createElement("h5");
  post.classList.add("post", "card-title", "m-0");
  post.innerText = postData.title;

  const postBody = document.createElement("p");
  postBody.classList.add("post", "fs-7", "card-text");
  postBody.innerText = postData.description;

  const postContent = document.createElement("div");
  postContent.append(post, postBody);

  const date = document.createElement("p");
  date.classList.add("fs-8", "m-0", "text-body-secondary");
  date.innerText = `created ${postData.created}`;

  const endDate = document.createElement("p");
  endDate.classList.add("fs-8", "m-0", "text-body-secondary", "fw-bold");
  const endsAt = postData.endsAt;
  updateCountdown(endsAt, endDate);

  const dateContent = document.createElement("div");
  dateContent.append(date, endDate);
  const bids = document.createElement("h7");
  bids.classList.add("m-0");
  bids.innerText = `Bids ${postData._count.bids}`;
  const bidNow = document.createElement("a");
  bidNow.classList.add("btn", "btn-secondary", "my-3", "fs-7");
  bidNow.href = `/src/html/details.html?id=${postData.id}`;
  bidNow.innerText = "Details";
  const bidContent = document.createElement("div");
  bidContent.classList.add("bidNow");
  bidContent.append(bidNow);
  const cardTop = document.createElement("div");
  cardTop.classList.add("d-flex", "justify-content-between");
  const imageContainer = document.createElement("a");
  imageContainer.classList.add("detailsLink");
  imageContainer.href = `../html/details.html?id=${postData.id}`;

  if (postData.media !== undefined) {
    const img = document.createElement("img");
    img.classList.add("card-img-bottom");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    imageContainer.append(img);
    cardBody.append(imageContainer, postContent, dateContent, bids, bidContent);
    timeLinePosts.append(cardBody);
    return timeLinePosts;
  }
}
