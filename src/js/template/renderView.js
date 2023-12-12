import { renderPostsTemplate } from "./renderPosts.js";
import {
  renderSortedPostsTemplateHighestBid,
  renderSortedPostsTemplateNewtoOld,
  renderSortedPostsTemplateOldtoNew,
} from "./sortedPosts.js";
import { header } from "../userInterface/header.js";

export function renderView() {
  renderPostsTemplate();
  renderSortedPostsTemplateHighestBid();
  renderSortedPostsTemplateNewtoOld();
  renderSortedPostsTemplateOldtoNew();
}
