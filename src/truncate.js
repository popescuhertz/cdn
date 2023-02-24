const globalOptions = new Cuttr("", {
  // global options here
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
});

function createCuttrInstance(target, options, breakpoints) {
  const instanceOptions = Object.assign({}, globalOptions.options, options);

  const instance = new Cuttr(target, instanceOptions);

  if (breakpoints) {
    for (const breakpoint in breakpoints) {
      instance.addBreakpoint(breakpoint, breakpoints[breakpoint]);
    }
  }

  return instance;
}

const truncateSmall = createCuttrInstance(
  ".truncate-small",
  {
    truncate: "words",
    length: 12,
    readMore: true,
  },
  {
    "768px": {
      truncate: "characters",
      length: 100,
    },
    "1024px": {
      truncate: "sentences",
      length: 2,
    },
  }
);

const truncateMedium = createCuttrInstance(
  ".truncate-medium",
  {
    truncate: "words",
    length: 121,
    readMore: true,
  },
  {
    "768px": {
      truncate: "characters",
      length: 150,
    },
    "1024px": {
      truncate: "sentences",
      length: 20,
    },
  }
);
