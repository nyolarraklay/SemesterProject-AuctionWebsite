export function updateCountdown(endsAt, endDate) {
  const interval = setInterval(function () {
    const targetDate = new Date(endsAt).getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      endDate.innerHTML = "Bidding ended";
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      endDate.innerHTML = `Ending in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}
