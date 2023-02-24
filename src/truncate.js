class CuttrBreakpoints {
  constructor(selector, options = {}, breakpoints = []) {
    this.selector = selector;
    this.options = { ...defaults, ...options };
    this.breakpoints = breakpoints;
    this._init();
  }

  _init() {
    const el = document.querySelectorAll(this.selector);

    if (el.length > 0) {
      el.forEach((element) => {
        let options = { ...this.options };
        const elementBreakpoints = this.breakpoints.filter(
          (bp) => window.matchMedia(bp.query).matches
        );
        elementBreakpoints.forEach(
          (bp) => (options = { ...options, ...bp.options })
        );

        const cuttrInstance = new Cuttr(element, options);
        if (options.truncate === "lines") {
          const lineHeight = parseInt(
            window.getComputedStyle(element).lineHeight
          );
          const maxHeight = options.lines * lineHeight;
          let truncated = false;
          while (element.scrollHeight > maxHeight) {
            if (options.truncate === "characters") {
              const text = element.textContent;
              element.textContent =
                text.slice(0, -options.length) + options.ending;
            } else if (options.truncate === "words") {
              const text = element.textContent;
              const words = text.split(" ");
              words.pop();
              element.textContent = words.join(" ") + options.ending;
            } else if (options.truncate === "sentences") {
              const text = element.textContent;
              const sentences = text.split(/[.|!|?]+/);
              sentences.pop();
              element.textContent = sentences.join(" ") + options.ending;
            }
            truncated = true;
          }
          if (truncated) {
            element.style.height = maxHeight + "px";
            element.style.overflow = "hidden";
            cuttrInstance.recalculate();
          }
        }
      });
    }
  }
}

const defaults = {
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
  truncate: "words",
  length: 100,
  ending: "...",
  loadedClass: "cuttr--loaded",
  title: false,
  readMore: false,
  readMoreText: "Read more",
  readLessText: "Read less",
  readMoreBtnPosition: "inside",
  readMoreBtnTag: "button",
  readMoreBtnSelectorClass: "read-more",
  readMoreBtnAdditionalClasses: "",
  lines: 1,
};

const cuttrClasses = [
  {
    selector: ".product-description.is-header",
    options: {
      lines: 4,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 20,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 30,
        },
      },
    ],
  },
  {
    selector: ".product-description.is-section",
    options: {
      length: 60,
      readMore: true,
      lines: 3,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 40,
          lines: 2,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 50,
          lines: 2,
        },
      },
    ],
  },
];

Cuttr.prototype.defaults = defaults;

const cuttrInstances = [];

for (const classObj of cuttrClasses) {
  const { selector, options, breakpoints } = classObj;
  const cuttrInstance = new CuttrBreakpoints(selector, options, breakpoints);
  cuttrInstances.push(cuttrInstance);
}
