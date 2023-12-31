export function profileTemplate(postData) {
  const containerProfile = document.createElement("div");
  containerProfile.classList.add("containerProfile");
  containerProfile.classList.add("d-flex");
  containerProfile.classList.add("justify-content-center");
  containerProfile.classList.add("align-items-center");
  containerProfile.classList.add("containerDetail");

  const card = document.createElement("div");
  card.classList.add("cardProfile");

  const profileAvatar = document.createElement("div");
  profileAvatar.classList.add("userProfile");
  profileAvatar.classList.add("text-center");
  const profile = document.createElement("div");
  profile.classList.add("profile");

  const profileDetails = document.createElement("div");
  profileDetails.classList.add("profileDetails");
  profileDetails.classList.add("text-center");
  const h4 = document.createElement("h2");

  h4.innerText = postData.name;
  const spanEmail = document.createElement("span");
  spanEmail.classList.add("d-block");
  spanEmail.classList.add("mb-2");
  spanEmail.innerText = postData.email;
  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-secondary");
  editButton.classList.add("btn-sm");
  editButton.classList.add("editButton");
  editButton.dataset.bsToggle = "modal";
  editButton.dataset.bsTarget = "#staticBackdrop";
  editButton.innerText = "edit profile";
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("d-flex");
  statsContainer.classList.add("justify-content-between");
  statsContainer.classList.add("align-items-center");
  statsContainer.classList.add("mt-4");
  statsContainer.classList.add("px-4");
  const credits = document.createElement("div");
  credits.classList.add("stats");
  const statsCredits = document.createElement("h6");
  statsCredits.classList.add("mb-0");
  statsCredits.innerText = "Credits";
  const creditData = document.createElement("span");
  creditData.innerText = postData.credits;

  credits.append(statsCredits, creditData);

  const wins = document.createElement("div");
  wins.classList.add("stats");
  const statsWins = document.createElement("h6");
  statsWins.classList.add("mb-0");
  statsWins.innerText = "Wins";
  const winsData = document.createElement("span");
  winsData.innerText = 0 + postData.wins.length;

  wins.append(statsWins, winsData);

  const listingsStat = document.createElement("div");
  listingsStat.classList.add("stats");
  const listingsStatTitle = document.createElement("h6");
  listingsStatTitle.classList.add("mb-0");
  listingsStatTitle.innerText = "Listings";
  const listingsData = document.createElement("span");
  listingsData.innerText = postData._count.listings;

  if (postData.avatar !== undefined) {
    const profileImage = document.createElement("img");
    profileImage.classList.add("avatar");
    profileImage.classList.add("rounded-circle");
    profileImage.src = postData.avatar;
    profileImage.alt = `Image from ${postData.name}`;
    profile.append(profileImage);
    profileAvatar.append(profile);
    listingsStat.append(listingsStatTitle, listingsData);
    statsContainer.append(credits, wins, listingsStat);
    profileDetails.append(h4, spanEmail, editButton, statsContainer);

    card.append(profileAvatar, profileDetails);
    containerProfile.append(card);
    return containerProfile;
  }
}
