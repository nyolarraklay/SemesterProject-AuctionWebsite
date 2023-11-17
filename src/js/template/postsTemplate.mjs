export function postsTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card");
  timeLinePosts.classList.add("mb-3");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const userImageAndName = document.createElement("div");
  userImageAndName.classList.add("d-flex");
  const image = document.createElement("img");
  image.classList.add("rounded-circle");
  image.classList.add("avatar");

  const user = document.createElement("div");
  user.classList.add("ms-2");

  const post = document.createElement("h5");
  post.classList.add("post");
  post.classList.add("card-title");
  post.classList.add("m-0");
  post.innerText = postData.title;

  const date = document.createElement("p");
  date.classList.add("fs-8");
  date.classList.add("m-0");
  date.classList.add("text-body-secondary");
  date.innerText = postData.created;

  user.append(post, date);
  userImageAndName.append(image, user);

  const postBody = document.createElement("p");
  postBody.classList.add("post");
  postBody.classList.add("card-text");
  postBody.innerText = postData.description;

  const editContainer = document.createElement("div");
  editContainer.classList.add("dotIcon");
  const icon = document.createElement("i");
  icon.classList.add("modalOne");
  icon.classList.add("bi");
  icon.classList.add("bi-three-dots");
  icon.dataset.bsToggle = "modal";
  icon.dataset.bsTarget = "#staticBackdrop";
  icon.dataset.bsId = postData.id;
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("ms-3");
  deleteIcon.classList.add("bi");
  deleteIcon.classList.add("bi-x");
  deleteIcon.dataset.bsId = postData.id;

  editContainer.append(icon, deleteIcon);

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
    cardTop.append(userImageAndName, editContainer);
    cardBody.append(cardTop);
    cardBody.append(postBody);
    imageContainer.append(img);
    cardBody.append(imageContainer);
    timeLinePosts.append(cardBody);
    return timeLinePosts;
  }
}
