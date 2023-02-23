const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const lineHeightCache = new Map();

const getLineHeight = (element) => {
  const cacheKey = element.tagName + element.className;
  if (lineHeightCache.has(cacheKey)) {
    return lineHeightCache.get(cacheKey);
  }
  const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
  lineHeightCache.set(cacheKey, lineHeight);
  return lineHeight;
};

const truncateText = (element) => {
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

  const lineHeight = getLineHeight(container);
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
};

const intersectionObserverConfig = {
  root: null,
  rootMargin: "200px",
  threshold: 0,
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
        // Check if element is close to viewport
        const intersectionRatio = entry.intersectionRatio;
        const isCloseToViewport =
          intersectionRatio > 0 && intersectionRatio < 1;

        // If element is close to viewport, truncate immediately
        if (isCloseToViewport) {
          truncateText(entry.target);
          entry.target.dataset.truncated = true;
          observer.unobserve(entry.target);
        } else {
          // Otherwise, debounce the truncation to occur 200px before element comes into viewport
          debounce(
            () => {
              truncateText(entry.target);
              entry.target.dataset.truncated = true;
              observer.unobserve(entry.target);
            },
            50,
            { leading: true, trailing: false, maxWait: 200 }
          )();
        }
      }
    });
  },
  { rootMargin: "200px 0px", threshold: 0 }
);

const observeElements = () => {
  document.querySelectorAll("[data-max-lines]").forEach((element) => {
    observer.observe(element);
  });
};

window.addEventListener("load", observeElements);

// Update observer when window is resized
window.addEventListener("resize", debounce(observeElements, 50));
