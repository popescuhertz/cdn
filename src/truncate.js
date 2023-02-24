class CuttrBreakpoints {
  constructor(selector, options = {}, breakpoints = []) {
    this.selector = selector;
    this.options = { ...defaults, ...options };
    this.breakpoints = breakpoints;
    this._init();
  }

  cuttrInstance;
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
      truncate: "lines",
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
      truncate: "lines",
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
