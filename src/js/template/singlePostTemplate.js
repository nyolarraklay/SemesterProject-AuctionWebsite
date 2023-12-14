import { updateCountdown } from "../tools/clear.js";

export function singlePostTemplate(postData) {
  const timeLinePosts = document.createElement("div");
  timeLinePosts.classList.add("card", "mb-3", "details-card", "col", "p-4");

  const detailsDIv = document.createElement("div");
  detailsDIv.classList.add("row");
  detailsDIv.classList.add("g-0");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("col-md-4");

  const detailsDIv2 = document.createElement("div");
  detailsDIv2.classList.add("col-md-6");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.classList.add("m-0");

  const postTitle = document.createElement("h5");
  postTitle.classList.add("post");
  postTitle.classList.add("card-text");
  postTitle.innerText = postData.title;

  const postCreated = document.createElement("p");
  postCreated.classList.add("fs-7");
  postCreated.classList.add("card-text");
  postCreated.innerHTML = `Created ${postData.created} <br> Updated ${postData.updated}`;

  const postUpdated = document.createElement("p");
  postUpdated.classList.add("fs-7");
  postUpdated.classList.add("card-text");
  postUpdated.innerText = `Updated ${postData.updated}`;

  const endDate = document.createElement("p");
  endDate.classList.add(
    "fs-6",
    "m-0",
    "text-body-secondary",
    "fw-bold",
    "card-text",
  );
  const endsAt = postData.endsAt;
  updateCountdown(endsAt, endDate);

  const bids = document.createElement("h7");
  bids.classList.add("m-0");
  bids.innerText = `Bids ${postData._count.bids}`;

  const listDetails = document.createElement("div");
  listDetails.classList.add("mt-3");
  const detailsContainer = document.createElement("div");
  const detailsTitle = document.createElement("h5");
  detailsTitle.innerText = "Description";

  const postBody = document.createElement("p");
  postBody.classList.add("fs-7");
  postBody.classList.add("card-text");
  postBody.innerText = postData.description;

  const userImageAndName = document.createElement("div");
  userImageAndName.classList.add("d-flex");

  const seller = document.createElement("h5");
  seller.innerText = "Seller";

  const image = document.createElement("img");
  image.classList.add("rounded-circle");
  image.classList.add("avatar");
  image.alt = postData.seller.name;
  image.src = postData.seller.avatar;

  const sellerdetails = document.createElement("div");
  sellerdetails.classList.add("ms-2");

  const post = document.createElement("h6");
  post.classList.add("post");
  post.classList.add("card-title");
  post.classList.add("m-0");
  post.innerText = postData.seller.name;

  const sellerEmail = document.createElement("p");
  sellerEmail.classList.add("fs-8");
  sellerEmail.classList.add("m-0");
  sellerEmail.classList.add("text-body-secondary");
  sellerEmail.innerText = postData.seller.email;

  const sellerwins = document.createElement("p");
  sellerwins.classList.add("fs-8");
  sellerwins.classList.add("m-0");
  sellerwins.classList.add("text-body-secondary");
  const wins = 0 + postData.seller.wins;
  sellerwins.innerText = `Wins = ${wins}`;

  sellerdetails.append(post, sellerEmail, sellerwins);
  userImageAndName.append(image, sellerdetails);

  const bidder = document.createElement("h4");
  bidder.classList.add("mt-4");
  bidder.innerText = "Bids";

  const bidNow = document.createElement("button");
  bidNow.classList.add("btn", "btn-secondary", "fs-7", "ms-5", "bidNow");
  bidNow.innerText = "Bid Now";
  bidNow.setAttribute("data-bs-toggle", "modal");
  bidNow.setAttribute("data-bs-target", "#bidModal");

  const orderedList = document.createElement("ol");

  postData.bids.forEach((element) => {
    const bidderDetails = document.createElement("li");
    bidderDetails.classList.add("mt-2");
    bidderDetails.classList.add("h6");
    const biddeName = document.createElement("h7");
    biddeName.classList.add("post");
    biddeName.classList.add("card-title");
    biddeName.classList.add("m-0");
    biddeName.innerText = element.bidderName;

    const amount = document.createElement("p");
    amount.classList.add("fs-7");
    amount.classList.add("m-0");
    amount.classList.add("text-body-secondary");
    amount.innerText = `Amount: ${element.amount}`;

    const bidderCreated = document.createElement("p");
    bidderCreated.classList.add("fs-8");
    bidderCreated.classList.add("m-0");
    bidderCreated.innerText = `Created: ${element.created}`;

    bidderDetails.append(biddeName, amount, bidderCreated);
    orderedList.appendChild(bidderDetails);
    bidder.append(orderedList);
  });

  detailsContainer.append(
    detailsTitle,
    postBody,
    seller,
    userImageAndName,
    bidder,
    bidNow,
  );

  listDetails.append(detailsContainer);
  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-secondary", "fs-7");
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.setAttribute("data-bs-target", "#staticBackdropEdit");
  editButton.innerText = "edit";

  if (postData.media !== undefined) {
    const img = document.createElement("img");
    img.classList.add("img-fluid");
    img.classList.add("rounded-start");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;

    imageContainer.append(img);

    detailsDIv2.append(cardBody);
    cardBody.append(postTitle, postCreated, endDate, bids);

    detailsDIv.append(imageContainer, detailsDIv2, editButton);
    timeLinePosts.append(detailsDIv, listDetails);
    return timeLinePosts;
  }
}
