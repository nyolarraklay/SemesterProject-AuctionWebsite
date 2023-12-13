export function membersTemplate(postData) {
  const containerProfile = document.createElement("div");
  containerProfile.classList.add(
    "containerProfile",
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "my-2"
  );

  const card = document.createElement("a");
  card.classList.add(
    "cardProfile",
    "mt-2",
    "text-decoration-none",
    "text-dark"
  );
  card.href = `../html/membersListing.html?id=${postData.name}`;

  const profileAvatar = document.createElement("div");
  profileAvatar.classList.add("userProfile", "text-center");
  const profile = document.createElement("div");
  profile.classList.add("profile", "fs-7", "text-center");

  const profileDetails = document.createElement("div");
  profileDetails.classList.add("profileDetails");
  profileDetails.classList.add("text-center");
  const h4 = document.createElement("h1");
  h4.classList.add("h4");
  h4.innerText = postData.name;
  const spanEmail = document.createElement("span");
  spanEmail.classList.add("d-block", "mb-2", "fs-7");

  spanEmail.innerText = postData.email;

  const statsContainer = document.createElement("div");
  statsContainer.classList.add(
    "d-flex",
    "justify-content-evenly",
    "align-items-center",
    "mt-4"
  );

  const credits = document.createElement("div");
  credits.classList.add("stats");
  const statsCredits = document.createElement("h6");
  statsCredits.classList.add("mb-0");
  statsCredits.innerText = "Credits";
  const creditData = document.createElement("span");
  creditData.classList.add("fs-6");
  creditData.innerText = postData.credits;

  credits.append(statsCredits, creditData);

  const wins = document.createElement("div");
  wins.classList.add("stats");
  const statsWins = document.createElement("h6");
  statsWins.classList.add("mb-0");
  statsWins.innerText = "Wins";
  const winsData = document.createElement("span");
  winsData.classList.add("fs-6");
  winsData.innerText = 0 + postData.wins.length;

  wins.append(statsWins, winsData);

  const listingsStat = document.createElement("div");
  listingsStat.classList.add("stats");
  const listingsStatTitle = document.createElement("h6");
  listingsStatTitle.classList.add("mb-0");
  listingsStatTitle.innerText = "Listings";
  const listingsData = document.createElement("span");
  listingsData.innerText = postData._count.listings;
  listingsData.classList.add("fs-6");

  if (postData.avatar !== undefined) {
    const profileImage = document.createElement("img");
    profileImage.classList.add("avatar", "rounded-circle");
    profileImage.src = postData.avatar;
    profileImage.alt = `Image from ${postData.name}`;
    profile.append(profileImage);
    profileAvatar.append(profile);
    listingsStat.append(listingsStatTitle, listingsData);
    statsContainer.append(credits, wins, listingsStat);
    profileDetails.append(h4, spanEmail, statsContainer);

    card.append(profileAvatar, profileDetails);
    containerProfile.append(card);
    return containerProfile;
  }
}
