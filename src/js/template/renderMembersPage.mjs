import { getMembers } from "../profile/getMembers.mjs";
import { membersTemplate } from "./membersTemplate.mjs";
import { searchMembersSetUp } from "../sort/index.mjs";

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
