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
  readMore: true,
  readMoreText: "Read more",
  readLessText: "Read less",
  readMoreBtnPosition: "inside",
  readMoreBtnTag: "button",
  readMoreBtnSelectorClass: "read-more",
  readMoreBtnAdditionalClasses: "",
};

const cuttrClasses = [
  {
    selector: ".section-container.is-header",
    options: {
      length: 40,
      readMoreBtnPosition: "after",
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
    selector: ".section-container.is-about",
    options: {
      length: 60,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 40,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 50,
        },
      },
    ],
  },
  {
    selector: ".section-container.is-features",
    options: {
      length: 40,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 30,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 40,
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
