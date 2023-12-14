export function bidTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card", "mb-3", "col", "cardBG");

  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "justify-content-between",
  );

  const post = document.createElement("h5");
  post.classList.add("post", "card-title", "m-0", "fs-6", "mb-1");
  post.innerText = `Amount: ${postData.amount}`;

  const postBody = document.createElement("p");
  postBody.classList.add("fs-7", "card-text");
  postBody.innerText = `Item #: ${postData.id}`;

  const date = document.createElement("p");
  date.classList.add("fs-8", "m-0");
  date.innerText = `created: ${postData.created}`;

  cardBody.append(postBody, post, date);
  timeLinePosts.append(cardBody);
  return timeLinePosts;
}
