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

const getLineHeight = (element) => {
  const cacheKey = element.tagName + element.className;
  const cachedLineHeight = element.dataset.lineHeight;
  if (cachedLineHeight) {
    return parseFloat(cachedLineHeight);
  }
  const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
  element.dataset.lineHeight = lineHeight;
  return lineHeight;
};

const binarySearch = (arr, target, comparator) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const comparisonResult = comparator(target, arr[mid]);
    if (comparisonResult === 0) {
      return mid;
    } else if (comparisonResult < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};

const truncateText = (element) => {
  const container = element.querySelector("p, h2, h3, h4, h5, h6, div, span");
  if (!container) return;

  const text = container.innerHTML;
  const targetHeight = parseInt(element.dataset.maxHeight);
  if (!targetHeight) return;

  const lineHeight = getLineHeight(container);
  const maxLines = Math.floor(targetHeight / lineHeight);

  if (maxLines >= container.offsetHeight / lineHeight) return;

  let left = 0;
  let right = text.length - 1;
  let mid;
  let lastMid;
  while (left <= right) {
    lastMid = mid;
    mid = Math.floor((left + right) / 2);
    container.innerHTML = text.slice(0, mid) + "...";
    if (container.offsetHeight <= targetHeight) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  container.innerHTML = text.slice(0, lastMid) + "...";
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
  document.querySelectorAll("[data-max-height]").forEach((element) => {
    observer.observe(element);
  });
};

const debouncedObserveElements = debounce(observeElements, 50);

window.addEventListener("load", debouncedObserveElements);
