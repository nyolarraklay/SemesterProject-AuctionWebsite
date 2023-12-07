import * as constant from "../constant/index.mjs";
import { headers } from "../authentication/headers.mjs";
import * as storage from "../storage/index.mjs";

export async function updateProfile(avatar) {
  const profile = () => storage.load("profile");
  const myProfiles = profile();
  const updateProfileURL = `${constant.API_BASE_URL}${constant.allProfiles}/${myProfiles.name}/media`;
  console.log(updateProfileURL);
  const response = await fetch(updateProfileURL, {
    method: "PUT",
    body: JSON.stringify({ ...profile, avatar }),
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error(response.statusText);
}
