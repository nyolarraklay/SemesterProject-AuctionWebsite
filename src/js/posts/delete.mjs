import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";

export async function deletePost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const response = await fetch(`${API_BASE_URL}${listingsAll}/${id}`, {
    method: "delete",
    headers: headers(),
  });
  if (response.ok) {
    location.href = "/src/html/profileListings.html";
    return await response.json();
  }
  const responseBody = await response.text();
  alert(`Error: ${response.statusText}\n${responseBody}`);
  throw new Error(response.statusText);
}
