export function sortPostsOldestToNewest(publish) {
  return publish.sort(
    (postA, postB) => new Date(postA.created) - new Date(postB.created)
  );
}

export function sortPostsNewestToOldest(publish) {
  return publish.sort(
    (postA, postB) => new Date(postB.created) - new Date(postA.created)
  );
}

export function sortPostsBiggestBid(publish) {
  return publish.sort(
    (postA, postB) =>
      new Number(postB._count.bids) - new Number(postA._count.bids)
  );
}
