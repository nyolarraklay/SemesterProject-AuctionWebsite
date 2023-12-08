import { updatePost } from "../../posts/update.js";

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
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
