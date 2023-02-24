class CuttrWithBreakpoints extends Cuttr {
  constructor(selector, options) {
    super(selector, options);

    // get all breakpoints for the selector
    const breakpoints = options.breakpoints || [];

    // set up a MediaQueryList for each breakpoint
    this.mediaQueryLists = breakpoints.map((breakpoint) => {
      return {
        query: window.matchMedia(breakpoint.query),
        options: breakpoint.options,
      };
    });

    // attach listeners for each breakpoint
    this.mediaQueryLists.forEach((mediaQueryList) => {
      mediaQueryList.query.addListener(() => {
        this.updateOptions();
      });
    });
  }

  updateOptions() {
    // get the options for the current breakpoint
    const currentOptions = this.getOptionsForCurrentBreakpoint();

    // update the options for the Cuttr instance
    this.options = Object.assign({}, this.options, currentOptions);

    // reinitialize Cuttr with the updated options
    this.destroy();
    this.initialize();
  }

  getOptionsForCurrentBreakpoint() {
    // find the first breakpoint that matches the current viewport
    const matchedMediaQuery = this.mediaQueryLists.find(
      (mediaQueryList) => mediaQueryList.query.matches
    );

    // return the options for the matched breakpoint, or an empty object if none found
    return matchedMediaQuery ? matchedMediaQuery.options : {};
  }
}

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

// create CuttrWithBreakpoints instances for each class
const cuttrs = cuttrClasses.map((cuttrClass) => {
  const options = Object.assign({}, defaults, cuttrClass.options, {
    licenseKey: defaults.licenseKey,
  });
  return new CuttrWithBreakpoints(cuttrClass.selector, options);
});
