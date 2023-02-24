// Global defaults
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

// Iterate over classes to initialize Cuttr on them
for (let i = 0; i < cuttrClasses.length; i++) {
  const classInfo = cuttrClasses[i];

  // Merge class options with global defaults
  const options = Object.assign({}, defaults, classInfo.options);

  // Create new instance of Cuttr for the class selector
  const elements = document.querySelectorAll(classInfo.selector);
  for (let j = 0; j < elements.length; j++) {
    const element = elements[j];

    // Add breakpoints to options
    const bpOptions = getBreakpointOptions(classInfo.breakpoints);
    Object.assign(options, bpOptions);

    // Initialize Cuttr instance on element with options
    const cuttr = new Cuttr(element, options);
  }
}

// Get breakpoint options for the current screen size
function getBreakpointOptions(breakpoints) {
  const bpOptions = {};

  for (let i = 0; i < breakpoints.length; i++) {
    const breakpoint = breakpoints[i];
    const mql = window.matchMedia(breakpoint.query);

    if (mql.matches) {
      Object.assign(bpOptions, breakpoint.options);
    }
  }

  return bpOptions;
}
