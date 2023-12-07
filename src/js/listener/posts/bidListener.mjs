import { bidNow } from "../../posts/bid.mjs";

export async function bidListener(event) {
  event.preventDefault();
  const postListing = event.target;
  const postListingData = new FormData(postListing);
  const bid = postListingData.get("amount");
  const amount = parseInt(bid);

  try {
    await bidNow(amount);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
