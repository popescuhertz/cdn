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

        // Get the element's font size and calculate the number of characters that can fit per line
        const fontSize = parseInt(
          window.getComputedStyle(element).getPropertyValue("font-size")
        );
        const lineHeight = parseInt(
          window.getComputedStyle(element).getPropertyValue("line-height")
        );
        const charsPerLine = Math.floor(element.clientWidth / fontSize);

        // Update options with truncation per line settings
        if (options.truncate === "lines") {
          options.length = options.length * charsPerLine;
        }

        new Cuttr(element, options);
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
};

const cuttrClasses = [
  {
    selector: ".product-description.is-header",
    options: {
      length: 2,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 1,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          lines: 2,
        },
      },
    ],
  },
  {
    selector: ".product-description.is-section",
    options: {
      length: 3,
      readMore: true,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 2,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 3, // truncate to 3 lines
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
