import { updatePost } from "../../posts/update.mjs";

export async function updatePostListener(event) {
  event.preventDefault();
  const postListing = event.target;
  const postListingData = new FormData(postListing);
  const title = postListingData.get("title");
  const description = postListingData.get("description");
  const tags = [postListingData.get("tags")];
  const media = [postListingData.get("media")];

  try {
    await updatePost(title, description, tags, media);
  } catch {
    return alert("There was a problem posting your list");
  }
}
