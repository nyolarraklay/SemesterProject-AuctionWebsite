import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";

export async function getPosts(limit = 30, offset = 0) {
  const response = await fetch(
    `${API_BASE_URL}${listingsAll}?limit=${limit}&offset=${offset}&_active=true`,
    { headers: headers() }
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getPost(id) {
  const response = await fetch(
    `${API_BASE_URL}/auction/listings/${id}?_seller=true&_bids=true`,
    {
      headers: headers(),
    }
  );
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
