import { postsTemplate } from "../template/postsTemplate.mjs";

function searchPostsByEverything(publish, term) {
  const filteredPublish = publish.filter(function (post) {
    const result = post.title.toLowerCase().trim().includes(term);
    return result;
  });

  const publishContent = filteredPublish.map(postsTemplate);
  const container = document.querySelector(".API-title");
  container.innerHTML = "";
  container.append(...publishContent);
}

export function searchPostsSetUp(publish) {
  const searchForm = document.querySelector("form#search");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.term.value;
    const term = searchTerm.toLowerCase();

    searchPostsByEverything(publish, term);
  });
}
