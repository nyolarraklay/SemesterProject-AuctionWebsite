import { updateCountdown } from "../tools/clear.js";

export function profileListingsTemplate(postData) {
  const timeLinePosts = document.createElement("a");
  timeLinePosts.classList.add("card", "mb-3", "col", "cardBG");
  timeLinePosts.href = `../html/details.html?id=${postData.id}`;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.classList.add("d-flex");
  cardBody.classList.add("flex-column");
  cardBody.classList.add("justify-content-between");

  const post = document.createElement("h5");
  post.classList.add("post");
  post.classList.add("card-title");
  post.classList.add("m-0");
  post.innerText = postData.title;

  const postBody = document.createElement("p");
  postBody.classList.add("post");
  postBody.classList.add("fs-7");
  postBody.classList.add("card-text");
  postBody.innerText = postData.description;

  const postContent = document.createElement("div");
  postContent.append(post, postBody);

  const date = document.createElement("p");
  date.classList.add("fs-8");
  date.classList.add("m-0");
  date.classList.add("text-body-secondary");
  date.innerText = `created ${postData.created}`;

  const endDate = document.createElement("p");
  endDate.classList.add("fs-8", "m-0", "text-body-secondary", "fw-bold");
  const endsAt = postData.endsAt;
  updateCountdown(endsAt, endDate);

  const dateContent = document.createElement("div");
  dateContent.append(date, endDate);

  const bid_editContainer = document.createElement("div");
  bid_editContainer.classList.add(
    "d-flex",
    "justify-content-between",
    "align-center",
  );

  const bids = document.createElement("h7");
  bids.classList.add("m-0");
  bids.innerText = `Bids ${postData._count.bids}`;

  if (postData.media !== undefined) {
    const img = document.createElement("img");
    img.classList.add("card-img-bottom");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    cardBody.append(img, postContent, dateContent, bids);
    timeLinePosts.append(cardBody);
    return timeLinePosts;
  }
}
