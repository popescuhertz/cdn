// Define global options
Cuttr.setGlobalOptions({
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
});

// Define options for each class and breakpoint
const options = [
  {
    class: ".truncate-1",
    breakpoints: [
      { width: 768, options: { truncate: "words", length: 20 } },
      { width: 992, options: { truncate: "words", length: 30 } },
      { width: 1200, options: { truncate: "words", length: 40 } },
    ],
    defaultOptions: {
      truncate: "words",
      length: 10,
    },
  },
  {
    class: ".truncate-2",
    breakpoints: [
      {
        width: 768,
        options: {
          truncate: "characters",
          length: 100,
        },
      },
      {
        width: 992,
        options: {
          truncate: "characters",
          length: 150,
        },
      },
      {
        width: 1200,
        options: {
          truncate: "characters",
          length: 200,
        },
      },
    ],
    defaultOptions: {
      truncate: "characters",
      length: 50,
    },
  },
];

// Initialize Cuttr for each class and breakpoint
options.forEach((option) => {
  const { class: className, breakpoints, defaultOptions } = option;

  const instance = new Cuttr(className, defaultOptions);

  breakpoints.forEach((breakpoint) => {
    const { width, options } = breakpoint;

    instance.addBreakpoint(width, options);
  });
});
