// Set global options
Cuttr.prototype.defaults = {
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
    breakpoints: {
      "(max-width: 480px)": {
        length: 25,
        readMoreText: "Read more for Class 1 - Breakpoint 1",
      },
      "(min-width: 481px) and (max-width: 768px)": {
        length: 35,
        readMoreText: "Read more for Class 1 - Breakpoint 2",
      },
    },
  },
  {
    selector: ".truncate-medium",
    options: {
      truncate: "words",
      length: 20,
      readMore: true,
      readMoreText: "Read more for Class 2",
    },
    breakpoints: {
      "(max-width: 480px)": {
        length: 10,
        readMoreText: "Read more for Class 2 - Breakpoint 1",
      },
      "(min-width: 481px) and (max-width: 768px)": {
        length: 15,
        readMoreText: "Read more for Class 2 - Breakpoint 2",
      },
    },
  },
];

// Initialize Cuttr instances with class options and breakpoints
const cuttrInstances = [];
for (const cuttrClass of cuttrClasses) {
  const options = Object.assign(
    {},
    Cuttr.prototype.defaults,
    cuttrClass.options
  );
  const element = document.querySelector(cuttrClass.selector);
  const cuttrInstance = new Cuttr(element, options);
  cuttrInstance.classSelector = cuttrClass.selector;
  cuttrInstances.push(cuttrInstance);

  for (const [breakpoint, breakpointOptions] of Object.entries(
    cuttrClass.breakpoints
  )) {
    const mediaQueryList = window.matchMedia(breakpoint);

    const updateInstance = () => {
      cuttrInstance.updateOptionsPerClass(breakpointOptions);
    };

    if (mediaQueryList.matches) {
      updateInstance();
    }

    mediaQueryList.addListener(updateInstance);
  }
}

// Update options for each instance of Cuttr for the current breakpoint
Cuttr.prototype.updateOptionsPerClass = function (options) {
  if (this.classSelector) {
    const instancesToUpdate = cuttrInstances.filter(
      (instance) => instance.classSelector === this.classSelector
    );
    for (const instance of instancesToUpdate) {
      instance.updateOptions(options);
    }
  }
};
