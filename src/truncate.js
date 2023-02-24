// Define the class names and breakpoints
const classBreakpoints = {
  ".class1": {
    sm: 10,
    md: 20,
    lg: 30,
  },
  ".class2": {
    sm: 50,
    md: 100,
    lg: 150,
  },
  // add more classes here
};

// Define the default options
const defaultOptions = {
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
  truncate: "words",
  length: 12,
};

// Initialize Cuttr for each class
Object.keys(classBreakpoints).forEach((className) => {
  const options = Object.assign(
    {},
    defaultOptions,
    classBreakpoints[className]["sm"]
  );
  const truncateElement = new Cuttr(className, options);

  // Update the options on window resize
  window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    let breakpoint;
    if (screenWidth >= 992) {
      breakpoint = "lg";
    } else if (screenWidth >= 768) {
      breakpoint = "md";
    } else {
      breakpoint = "sm";
    }
    const options = Object.assign(
      {},
      defaultOptions,
      classBreakpoints[className][breakpoint]
    );
    truncateElement.updateOptions(options);
  });
});
