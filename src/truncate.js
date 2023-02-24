// global options
Cuttr.defaults = {
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

// class-specific options
const cuttrOptions = [
  {
    selector: ".truncate-small",
    options: {
      length: 50,
      readMore: true,
    },
    breakpoints: [
      {
        width: 768,
        options: {
          length: 30,
        },
      },
      {
        width: 1024,
        options: {
          length: 20,
        },
      },
    ],
  },
  {
    selector: ".truncate-medium",
    options: {
      truncate: "words",
      length: 15,
    },
    breakpoints: [
      {
        width: 768,
        options: {
          length: 10,
        },
      },
      {
        width: 1024,
        options: {
          length: 5,
        },
      },
    ],
  },
];

// initialize Cuttr.js for each element with class-specific options and breakpoints
cuttrOptions.forEach(function (option) {
  const element = document.querySelector(option.selector);
  const options = Object.assign({}, Cuttr.defaults, option.options);
  const breakpoints = option.breakpoints || [];

  const cuttrInstance = new Cuttr(element, options);

  // add breakpoint-specific options
  breakpoints.forEach(function (breakpoint) {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint.width}px)`);
    const listener = function () {
      const breakpointOptions = Object.assign({}, options, breakpoint.options);
      cuttrInstance.setOptions(breakpointOptions);
    };

    mediaQuery.addListener(listener);

    // immediately apply breakpoint-specific options if the media query is currently matched
    if (mediaQuery.matches) {
      listener();
    }
  });
});
