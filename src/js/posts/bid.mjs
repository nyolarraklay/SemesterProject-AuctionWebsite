import { API_BASE_URL, listingsAll } from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";
import * as storage from "../storage/index.mjs";

export async function bidNow(amount) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const response = await fetch(`${API_BASE_URL}${listingsAll}/${id}/bids`, {
    method: "post",
    body: JSON.stringify({ amount }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    location.reload();
    return await response.json();
  }

  const responseBody = await response.text();
  alert(`Error: ${response.statusText}\n${responseBody}`);
  throw new Error(response.statusText);
}
