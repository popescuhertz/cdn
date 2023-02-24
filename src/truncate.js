// define the options for each breakpoint and instance
const options = [
  {
    breakpoint: "(max-width: 768px)",
    instances: [
      {
        selector: ".element-b",
        truncate: "words",
        length: 10,
      },
      {
        selector: ".element-a",
        truncate: "characters",
        length: 50,
      },
    ],
  },
  {
    breakpoint: "(min-width: 769px)",
    instances: [
      {
        selector: ".element-b",
        truncate: "words",
        length: 20,
      },
      {
        selector: ".element-a",
        truncate: "characters",
        length: 100,
      },
    ],
  },
];

// create a function to initialize Cuttr instances for each breakpoint and instance
function initCuttr() {
  options.forEach((option) => {
    const mediaQuery = window.matchMedia(option.breakpoint);
    const instances = option.instances.map((instance) => {
      const element = document.querySelector(instance.selector);
      return new Cuttr(element, instance);
    });
    // add listener to update instances when breakpoint changes
    mediaQuery.addListener((event) => {
      if (event.matches) {
        instances.forEach((instance) => {
          instance.destroy();
          const element = document.querySelector(instance.selector);
          new Cuttr(element, instance);
        });
      }
    });
  });
}

// call the function to initialize Cuttr instances on page load
initCuttr();
