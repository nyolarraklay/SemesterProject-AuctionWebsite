import { renderPostsTemplate } from "./renderPosts.mjs";
import {
  renderSortedPostsTemplateHighestBid,
  renderSortedPostsTemplateNewtoOld,
  renderSortedPostsTemplateOldtoNew,
} from "./sortedPosts.mjs";
import { header } from "../userInterface/header.mjs";

export function renderView() {
  renderPostsTemplate();
  renderSortedPostsTemplateHighestBid();
  renderSortedPostsTemplateNewtoOld();
  renderSortedPostsTemplateOldtoNew();
}
