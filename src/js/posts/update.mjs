import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";

export async function updatePost(title, description, tags, media) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const response = await fetch(`${API_BASE_URL}${listingsAll}/${id}`, {
    method: "put",
    body: JSON.stringify({ title, description, tags, media }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    const update = await response.json();
    location.reload();
    return update;
  }

  throw new Error(response.statusText);
}