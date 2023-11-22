export function postsTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card");
  timeLinePosts.classList.add("mb-3");
  timeLinePosts.classList.add("col");
  timeLinePosts.classList.add("cardBG");

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
  endDate.classList.add("fs-8");
  endDate.classList.add("m-0");
  endDate.classList.add("text-body-secondary");
  endDate.innerText = `Bidding ends at ${postData.endsAt}`;

  const dateContent = document.createElement("div");
  dateContent.append(date, endDate);

  const bids = document.createElement("h7");
  bids.classList.add("m-0");
  bids.innerText = `Bids ${postData._count.bids}`;

  const bidNow = document.createElement("button");
  bidNow.classList.add("btn");
  bidNow.classList.add("btn-secondary");
  bidNow.classList.add("my-3");
  bidNow.classList.add("fs-7");
  bidNow.innerText = "Bid Now";

  const bidContent = document.createElement("div");
  bidContent.append(bidNow);

  const cardTop = document.createElement("div");
  cardTop.classList.add("d-flex");
  cardTop.classList.add("justify-content-between");
  const imageContainer = document.createElement("a");
  imageContainer.href = `/posts/UserPost/index.html?id=${postData.id}`;

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
