const truncateText = (element) => {
  const container = element.querySelector("p, h2, h3, h4, h5, h6, div, span");
  if (!container) return;

  const text = container.innerHTML.trim();

  const maxLines = parseInt(element.dataset.maxLines) || Infinity;
  const lineHeight = parseFloat(getComputedStyle(container).lineHeight);
  const maxContainerHeight = lineHeight * maxLines;

  container.style.height = "auto";
  const fullContainerHeight = container.offsetHeight;
  container.style.height = "";

  if (fullContainerHeight > maxContainerHeight) {
    let truncatedText = text.slice(0, -1);
    while (
      container.offsetHeight > maxContainerHeight &&
      truncatedText.length > 0
    ) {
      truncatedText = truncatedText.slice(0, -1);
    }
    container.innerHTML = truncatedText.trim() + "...";

    const showMoreBtn = element.querySelector(".show-more");
    const showLessBtn = element.querySelector(".show-less");
    if (showMoreBtn && showLessBtn) {
      showMoreBtn.style.display = "inline";
      showLessBtn.style.display = "none";

      showMoreBtn.addEventListener("click", () => {
        container.innerHTML = text + "...";
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline";
      });

      showLessBtn.addEventListener("click", () => {
        container.innerHTML = truncatedText.trim() + "...";
        showMoreBtn.style.display = "inline";
        showLessBtn.style.display = "none";
      });
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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.dataset.truncated) {
          return;
        }
        truncateText(entry.target);
        entry.target.dataset.truncated = true;
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, threshold: 0 }
);

const observeElements = () => {
  document.querySelectorAll("[data-max-lines]").forEach((element) => {
    observer.observe(element);
  });
};

const debouncedObserveElements = debounce(observeElements, 50);

window.addEventListener("load", debouncedObserveElements);
