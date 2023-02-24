// Define the breakpoints and their options
const breakpointOptions = {
  ".class1": [
    { breakpoint: 480, options: { truncate: "words", length: 10 } },
    { breakpoint: 768, options: { truncate: "words", length: 20 } },
    { breakpoint: 1024, options: { truncate: "words", length: 30 } },
  ],
  ".class2": [
    { breakpoint: 480, options: { truncate: "words", length: 5 } },
    { breakpoint: 768, options: { truncate: "words", length: 10 } },
    { breakpoint: 1024, options: { truncate: "words", length: 15 } },
  ],
};

// Loop through each breakpointOptions key-value pair and create Cuttr instances for each breakpoint
Object.entries(breakpointOptions).forEach(([selector, optionsArray]) => {
  const element = document.querySelector(selector);
  if (element) {
    const cuttrInstances = optionsArray.map(({ breakpoint, options }) => {
      return window.innerWidth < breakpoint
        ? new Cuttr(element, options)
        : null;
    });
    // Store the Cuttr instances in the element's dataset for later reference
    element.dataset.cuttrInstances = JSON.stringify(cuttrInstances);
  }
});

// Add a resize event listener to update the Cuttr instances when the window is resized
window.addEventListener("resize", () => {
  Object.entries(breakpointOptions).forEach(([selector, optionsArray]) => {
    const element = document.querySelector(selector);
    if (element) {
      const cuttrInstances = JSON.parse(element.dataset.cuttrInstances);
      cuttrInstances.forEach((instance, i) => {
        if (instance) {
          const { breakpoint, options } = optionsArray[i];
          if (window.innerWidth < breakpoint) {
            if (!instance.isInitialized()) {
              instance.initialize(options);
            }
          } else {
            if (instance.isInitialized()) {
              instance.destroy();
            }
          }
        }
      });
    }
  });
});
