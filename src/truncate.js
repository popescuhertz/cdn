const truncateText = (element) => {
  const container = element.querySelector("p, h2, h3, h4, h5, h6, div, span");
  if (!container) return;

  const text = container.innerHTML.trim();
  let maxLines;

  if (window.innerWidth < 768) {
    maxLines =
      parseInt(element.getAttribute("data-max-lines-mobile")) ||
      parseInt(element.getAttribute("data-max-lines")) ||
      Infinity;
  } else if (window.innerWidth < 1024) {
    maxLines =
      parseInt(element.getAttribute("data-max-lines-tablet")) ||
      parseInt(element.getAttribute("data-max-lines")) ||
      Infinity;
  } else {
    maxLines =
      parseInt(element.getAttribute("data-max-lines-desktop")) ||
      parseInt(element.getAttribute("data-max-lines")) ||
      Infinity;
  }

  const lineHeight = getLineHeight(container);
  const maxContainerHeight = lineHeight * maxLines;

  container.style.height = "auto";
  const fullContainerHeight = container.offsetHeight;
  container.style.height = "";

  if (fullContainerHeight > maxContainerHeight) {
    // Perform a binary search to find the maximum number of characters
    // that can be shown within the available space.
    let start = 0;
    let end = text.length - 1;
    let mid;

    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      container.innerHTML = text.substring(0, mid) + "...";

      if (container.offsetHeight > maxContainerHeight) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    // Show the truncated text.
    container.innerHTML = text.substring(0, end) + "...";

    const showMoreBtn = element.querySelector(".show-more");
    const showLessBtn = element.querySelector(".show-less");
    const shouldShowButtons = container.offsetHeight < fullContainerHeight;

    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = shouldShowButtons ? "inline" : "none";
      showLessBtn.style.display = "none";

      showMoreBtn.addEventListener("click", () => {
        container.innerHTML = text;
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline";
      });

      showLessBtn.addEventListener("click", () => {
        container.innerHTML = text.substring(0, end) + "...";
        showMoreBtn.style.display = "inline";
        showLessBtn.style.display = "none";
      });
    } else {
      container.innerHTML = text.substring(0, end) + "...";
    }
  } else {
    const showMoreBtn = element.querySelector(".show-more");
    const showLessBtn = element.querySelector(".show-less");
    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = "none";
      showLessBtn.style.display = "none";
    }
  }
};
