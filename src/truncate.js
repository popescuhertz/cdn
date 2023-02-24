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
    selector: ".truncate-small",
    options: {
      length: 40,
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
    selector: ".truncate-medium",
    options: {
      length: 60,
      readMore: true,
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
    selector: ".truncate-large",
    options: {
      length: 100,
      readMore: true,
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 60,
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 85,
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

console.log(cuttrInstances);
