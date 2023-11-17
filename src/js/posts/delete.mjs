import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";

export async function deletePost(id) {
  const response = await fetch(`${API_BASE_URL}${listingsAll}${id}`, {
    method: "delete",
    headers: headers(),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
