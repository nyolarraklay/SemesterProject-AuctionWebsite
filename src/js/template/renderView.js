import { renderPostsTemplate } from "./renderPosts.js";
import {
  renderSortedPostsTemplateHighestBid,
  renderSortedPostsTemplateNewtoOld,
  renderSortedPostsTemplateOldtoNew,
} from "./sortedPosts.js";

export function renderView() {
  renderPostsTemplate();
  renderSortedPostsTemplateHighestBid();
  renderSortedPostsTemplateNewtoOld();
  renderSortedPostsTemplateOldtoNew();
}
