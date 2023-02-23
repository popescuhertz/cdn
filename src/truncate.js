const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const container = entry.target.querySelector(
          "p, h2, h3, h4, h5, h6, div, span"
        );
        if (!container) return;

        const maxLines =
          window.innerWidth < 768
            ? parseInt(entry.target.getAttribute("data-max-lines-mobile")) ||
              parseInt(entry.target.getAttribute("data-max-lines")) ||
              Infinity
            : window.innerWidth < 1024
            ? parseInt(entry.target.getAttribute("data-max-lines-tablet")) ||
              parseInt(entry.target.getAttribute("data-max-lines")) ||
              Infinity
            : parseInt(entry.target.getAttribute("data-max-lines-desktop")) ||
              parseInt(entry.target.getAttribute("data-max-lines")) ||
              Infinity;

        const lineHeight = parseFloat(getComputedStyle(container).lineHeight);
        const maxContainerHeight = lineHeight * maxLines;

        container.style.height = "auto";
        const fullContainerHeight = container.offsetHeight;
        container.style.height = "";

        if (fullContainerHeight > maxContainerHeight) {
          let truncatedText = container.innerHTML;
          while (
            container.offsetHeight > maxContainerHeight &&
            truncatedText.length > 0
          ) {
            truncatedText = truncatedText.slice(0, -1);
            container.innerHTML = truncatedText + "...";
          }

          const showMoreBtn = entry.target.querySelector(".show-more");
          const showLessBtn = entry.target.querySelector(".show-less");
          const shouldShowButtons =
            container.offsetHeight < fullContainerHeight;

          if (showMoreBtn && showLessBtn) {
            showMoreBtn.style.display = shouldShowButtons ? "inline" : "none";
            showLessBtn.style.display = "none";

            showMoreBtn.addEventListener("click", () => {
              container.innerHTML = container.dataset.fullText;
              showMoreBtn.style.display = "none";
              showLessBtn.style.display = "inline";
            });

            showLessBtn.addEventListener("click", () => {
              container.innerHTML = container.dataset.truncatedText;
              showMoreBtn.style.display = "inline";
              showLessBtn.style.display = "none";
            });
          } else {
            container.dataset.truncatedText = truncatedText + "...";
            container.innerHTML = container.dataset.truncatedText;
          }
        } else {
          const showMoreBtn = entry.target.querySelector(".show-more");
          const showLessBtn = entry.target.querySelector(".show-less");
          if (showMoreBtn && showLessBtn) {
            showMoreBtn.style.display = "none";
            showLessBtn.style.display = "none";
          }
        }

        entry.target.dataset.truncated = true;
        observer.unobserve(entry.target);
      }
    });
  },
  { root: null, threshold: 0 }
);

document.querySelectorAll("[data-max-lines]").forEach((element) => {
  observer.observe(element);
});
