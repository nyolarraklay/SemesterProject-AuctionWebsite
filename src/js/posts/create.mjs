import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";

export async function createPost(title, body, media, tags) {
  const response = await fetch(`${API_BASE_URL}${listingsAll}`, {
    method: "post",
    body: JSON.stringify({ title, body, media, tags }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
