import { getMembers } from "../profile/getMembers.js";
import { membersTemplate } from "./membersTemplate.js";
import { searchMembersSetUp } from "../sort/index.js";

export async function renderMembersProfilePage() {
  try {
    const postData = await getMembers();

    const showData = postData.map(membersTemplate);
    const container = document.querySelector(".membersProfileContainer");
    container.append(...showData);
    searchMembersSetUp(postData);
  } catch (error) {
    error;
  }
}
