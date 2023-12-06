import { createPost } from "../../posts/create.mjs";

export async function postListener(event) {
  event.preventDefault();
  const postListing = event.target;
  const postListingData = new FormData(postListing);
  const title = postListingData.get("title");
  const description = postListingData.get("description");
  const tags = [postListingData.get("tags")];
  const media = [postListingData.get("media")];
  const endsAt = postListingData.get("endsAt");

  try {
    await createPost(title, description, tags, media, endsAt);
  } catch {
    return alert("There was a problem posting your list");
  }
}
