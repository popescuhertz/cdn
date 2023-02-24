class CuttrWithOptions {
  constructor(options) {
    this.defaultOptions = {
      truncate: "words",
      length: 100,
      ending: "...",
      loadedClass: "cuttr--loaded",
      title: false,
      readMore: false,
      readMoreText: "Read more",
      readLessText: "Read less",
      readMoreBtnPosition: "after",
      readMoreBtnTag: "button",
      readMoreBtnSelectorClass: "cuttr__readmore",
      readMoreBtnAdditionalClasses: "",
      breakpoints: [],
    };
    this.options = Object.assign({}, this.defaultOptions, options);
    this.init();
  }

  init() {
    this.truncateElements = document.querySelectorAll(".cuttr");

    this.truncateElements.forEach((truncateElement) => {
      let options = Object.assign(
        {},
        this.options,
        this.getBreakpointOptions(truncateElement)
      );

      truncateElement.cuttr = new Cuttr(truncateElement, options);
    });
  }

  getBreakpointOptions(truncateElement) {
    let options = {};
    if (this.options.breakpoints.length > 0) {
      this.options.breakpoints.forEach((breakpoint) => {
        if (window.matchMedia(breakpoint.mediaQuery).matches) {
          if (truncateElement.classList.contains(breakpoint.class)) {
            options = breakpoint.options;
          }
        }
      });
    }
    return options;
  }
}

let cuttrWithOptions = new CuttrWithOptions({
  truncate: "words",
  length: 12,
  breakpoints: [
    {
      class: "cuttr-small",
      mediaQuery: "(max-width: 576px)",
      options: {
        truncate: "words",
        length: 6,
        readMore: true,
      },
    },
    {
      class: "cuttr-medium",
      mediaQuery: "(max-width: 768px)",
      options: {
        truncate: "words",
        length: 8,
        readMore: true,
      },
    },
    {
      class: "cuttr-large",
      mediaQuery: "(max-width: 992px)",
      options: {
        truncate: "words",
        length: 10,
        readMore: true,
      },
    },
  ],
});

let cuttrDefaultOptions = new CuttrWithOptions({
  truncate: "words",
  length: 12,
  readMore: true,
  breakpoints: [
    {
      mediaQuery: "(max-width: 576px)",
      options: {
        length: 6,
      },
    },
    {
      mediaQuery: "(max-width: 768px)",
      options: {
        length: 8,
      },
    },
    {
      mediaQuery: "(max-width: 992px)",
      options: {
        length: 10,
      },
    },
  ],
});
