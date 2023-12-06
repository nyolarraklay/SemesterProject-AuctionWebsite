import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";

export async function createPost(title, description, tags, media, endsAt) {
  const response = await fetch(`${API_BASE_URL}${listingsAll}`, {
    method: "post",
    body: JSON.stringify({ title, description, tags, media, endsAt }),
    headers: headers("application/json"),
  });
  console.log(response.json);
  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
