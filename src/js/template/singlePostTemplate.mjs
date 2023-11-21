export function singlePostTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card");
  timeLinePosts.classList.add("mb-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const postTitle = document.createElement("h5");
  postTitle.classList.add("post");
  postTitle.classList.add("card-text");
  postTitle.innerText = postData.title;

  const postBody = document.createElement("p");
  postBody.classList.add("postBody");
  postBody.classList.add("card-text");
  postBody.innerText = postData.description;

  const postCreated = document.createElement("p");
  postCreated.classList.add("postCreated");
  postCreated.classList.add("card-text");
  postCreated.innerText = `Created ${postData.created}`;

  const postUpdated = document.createElement("p");
  postUpdated.classList.add("postUreated");
  postUpdated.classList.add("card-text");
  postUpdated.innerText = `Updated ${postData.updated}`;

  const postEnded = document.createElement("p");
  postEnded.classList.add("postEnded");
  postEnded.classList.add("card-text");
  postEnded.innerText = `Bidding ends at ${postData.endsAt}`;

  if (postData.media !== undefined) {
    const img = document.createElement("img");
    img.classList.add("card-img-bottom");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    cardBody.append(
      postTitle,
      postBody,
      postCreated,
      postUpdated,
      postEnded,
      img,
    );
    timeLinePosts.append(cardBody);
    return timeLinePosts;
  }
}
