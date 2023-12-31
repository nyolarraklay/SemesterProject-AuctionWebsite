import { API_BASE_URL, listingsAll } from "../constant/index.js";
import { headers } from "../authentication/headers.js";

export async function deletePost() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const response = await fetch(`${API_BASE_URL}${listingsAll}/${id}`, {
    method: "delete",
    headers: headers(),
  });
  if (response.ok) {
    location.href = "../html/profileListings.html";
    return await response.json();
  }
  const responseBody = await response.text();
  alert(`Error: ${response.statusText}\n${responseBody}`);
  throw new Error(response.statusText);
}
