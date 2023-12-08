import { API_BASE_URL, listingsAll } from "../constant/index.js";
import { headers } from "../authentication/headers.js";

export async function createPost(title, description, tags, media, endsAt) {
  const response = await fetch(`${API_BASE_URL}${listingsAll}`, {
    method: "post",
    body: JSON.stringify({ title, description, tags, media, endsAt }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    location.reload();
    return await response.json();
  }

  throw new Error(response.statusText);
}
