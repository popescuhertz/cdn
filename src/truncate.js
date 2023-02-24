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
          (b) => b.selector === this.selector
        );
        const bp = elementBreakpoints.find((b) => b.width >= window.innerWidth);

        if (bp && bp.options) {
          options = { ...options, ...bp.options };
        }

        const cuttr = new Cuttr(element, options);
        const lines = cuttr._calculateLines();

        if (
          options.truncate === "lines" &&
          options.lines &&
          lines > options.lines
        ) {
          cuttr.truncateByLines(options.lines);
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
};

const breakpoints = [
  {
    selector: ".product-description.is-section",
    width: 768,
    options: {
      truncate: "lines",
      lines: 2,
    },
  },
];

const cuttrBreakpoints = new CuttrBreakpoints(
  ".my-selector",
  defaults,
  breakpoints
);
