document.querySelectorAll("[data-max-lines]").forEach((element) => {
  const container = element.querySelector("p, h2, h3, h4, h5, h6, div, span");
  if (!container) return;

  const text = container.innerHTML;
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

  const lineHeight = parseFloat(getComputedStyle(container).lineHeight);
  const maxContainerHeight = lineHeight * maxLines;

  container.style.height = "auto";
  const fullContainerHeight = container.offsetHeight;
  container.style.height = "";

  if (fullContainerHeight > maxContainerHeight) {
    let truncatedText = text;
    while (
      container.offsetHeight > maxContainerHeight &&
      truncatedText.length > 0
    ) {
      truncatedText = truncatedText.slice(0, -1);
      container.innerHTML = truncatedText + "...";
    }

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
        container.innerHTML = truncatedText + "...";
        showMoreBtn.style.display = "inline";
        showLessBtn.style.display = "none";
      });
    } else {
      container.innerHTML = truncatedText + "...";
    }
  } else {
    const showMoreBtn = element.querySelector(".show-more");
    const showLessBtn = element.querySelector(".show-less");
    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = "none";
      showLessBtn.style.display = "none";
    }
  }
});
