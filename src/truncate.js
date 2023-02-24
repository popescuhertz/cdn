class CuttrWithBreakpoints extends Cuttr {
  constructor(selector, options) {
    super(selector, options);
    this.breakpoints = [];
    this.classOptions = [];
    this.init();
  }

  setOption(optionName, optionValue, classSelector = null) {
    if (classSelector) {
      const classIndex = this.classOptions.findIndex(
        (cls) => cls.selector === classSelector
      );
      if (classIndex >= 0) {
        this.classOptions[classIndex].options[optionName] = optionValue;
      } else {
        this.classOptions.push({
          selector: classSelector,
          options: { [optionName]: optionValue },
        });
      }
    } else {
      this.options[optionName] = optionValue;
    }
    this.reinit();
  }

  setBreakpoint(selector, query, options) {
    const classIndex = this.classOptions.findIndex(
      (cls) => cls.selector === selector
    );
    if (classIndex >= 0) {
      const classOptions = this.classOptions[classIndex];
      const breakpointIndex = classOptions.breakpoints.findIndex(
        (bp) => bp.query === query
      );
      if (breakpointIndex >= 0) {
        classOptions.breakpoints[breakpointIndex].options = options;
      } else {
        classOptions.breakpoints.push({ query, options });
      }
    } else {
      this.classOptions.push({
        selector,
        options: {},
        breakpoints: [{ query, options }],
      });
    }
    this.breakpoints.push(query);
    this.reinit();
  }

  removeBreakpoint(selector, query) {
    const classIndex = this.classOptions.findIndex(
      (cls) => cls.selector === selector
    );
    if (classIndex >= 0) {
      const classOptions = this.classOptions[classIndex];
      const breakpointIndex = classOptions.breakpoints.findIndex(
        (bp) => bp.query === query
      );
      if (breakpointIndex >= 0) {
        classOptions.breakpoints.splice(breakpointIndex, 1);
        if (classOptions.breakpoints.length === 0) {
          this.classOptions.splice(classIndex, 1);
        }
        const bpIndex = this.breakpoints.findIndex((bp) => bp === query);
        if (bpIndex >= 0) {
          this.breakpoints.splice(bpIndex, 1);
        }
        this.reinit();
      }
    }
  }

  init() {
    const classSelectors = this.classOptions.map((cls) => cls.selector);
    this.elements.forEach((el) => {
      const classList = el.classList;
      const selector = classSelectors.find((cls) => classList.contains(cls));
      const options = selector
        ? Object.assign(
            {},
            this.options,
            this.classOptions.find((cls) => cls.selector === selector).options
          )
        : this.options;
      let cuttr = new Cuttr(el, options);
      this.breakpoints.forEach((query) => {
        const bpOptions = selector
          ? Object.assign(
              {},
              options,
              this.classOptions
                .find((cls) => cls.selector === selector)
                .breakpoints.find((bp) => bp.query === query).options
            )
          : Object.assign(
              {},
              options,
              this.breakpoints.find((bp) => bp.query === query).options
            );
        cuttr.addBreakpoint(query, bpOptions);
      });
    });
  }

  reinit() {
    this.elements.forEach((el) => {
      const cuttr = Cuttr.instances.find((instance) => instance.element === el);
      if (cuttr) {
        cuttr.destroy();
      }
    });
    this.init();
  }
}

// Define defaults
const defaults = {
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
  truncate: "characters",
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
};

// Define classes with their options and breakpoints
const cuttrClasses = [
  {
    selector: ".truncate-small",
    options: {
      length: 50,
      readMore: true,
      readMoreText: "Read more for Class 1",
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 25,
          readMoreText: "Read more for Class 1 - Breakpoint 1",
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 35,
          readMoreText: "Read more for Class 1 - Breakpoint 2",
        },
      },
    ],
  },
  {
    selector: ".truncate-medium",
    options: {
      truncate: "words",
      length: 20,
      readMore: true,
      readMoreText: "Read more for Class 2",
    },
    breakpoints: [
      {
        query: "(max-width: 480px)",
        options: {
          length: 10,
          readMoreText: "Read more for Class 2 - Breakpoint 1",
        },
      },
      {
        query: "(min-width: 481px) and (max-width: 768px)",
        options: {
          length: 15,
          readMoreText: "Read more for Class 2 - Breakpoint 2",
        },
      },
    ],
  },
];

// Initialize Cuttr for each class with its own options and breakpoints
cuttrClasses.forEach((cuttrClass) => {
  const options = { ...defaults, ...cuttrClass.options };
  const element = document.querySelectorAll(cuttrClass.selector);

  element.forEach((el) => {
    const cuttrInstance = new Cuttr(el, options);

    // Add breakpoints
    if (cuttrClass.breakpoints) {
      cuttrClass.breakpoints.forEach((breakpoint) => {
        const breakpointOptions = { ...options, ...breakpoint.options };
        cuttrInstance.addBreakpoint(breakpoint.query, breakpointOptions);
      });
    }
  });
});
