// Define global options
const cuttrGlobalOptions = {
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
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

// Loop through classes and initialize Cuttr instances
for (const cuttrClass of cuttrClasses) {
  const { selector, options, breakpoints } = cuttrClass;

  // Merge class options with global options
  const mergedOptions = Object.assign({}, cuttrGlobalOptions, options);

  // Initialize Cuttr instance with class options
  let cuttrInstance = new Cuttr(selector, mergedOptions);

  // Loop through breakpoints and set options for each breakpoint
  for (const breakpoint of breakpoints) {
    const { query, options: breakpointOptions } = breakpoint;

    // Merge breakpoint options with class and global options
    const mergedBreakpointOptions = Object.assign(
      {},
      mergedOptions,
      breakpointOptions
    );

    // Add breakpoint event listener to update options
    const breakpointListener = function (event) {
      if (event.matches) {
        cuttrInstance.setOptions(mergedBreakpointOptions);
      } else {
        cuttrInstance.setOptions(mergedOptions);
      }
    };
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addListener(breakpointListener);
    breakpointListener(mediaQuery);
  }
}
