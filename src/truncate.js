new Cuttr(".global-truncate", {
  licenseKey: "2E864F64-86BB4151-AD9A08AF-B0B5C5BA",
});

$(document).ready(function () {
  // Define an object that maps each class to its truncation options
  const classOptions = {
    ".element1": {
      truncate: "words",
      length: 20,
    },
    ".element2": {
      truncate: "words",
      length: 30,
      readMore: true,
    },
    ".element3": {
      truncate: "characters",
      length: 100,
    },
  };

  // Define an object that maps each breakpoint to the corresponding class options
  const breakpointOptions = {
    576: {
      // Breakpoint for screens smaller than 576px
      ".element1": {
        length: 10,
      },
      ".element2": {
        length: 15,
      },
      ".element3": {
        length: 50,
      },
    },
    992: {
      // Breakpoint for screens smaller than 992px
      ".element1": {
        length: 15,
      },
      ".element2": {
        length: 25,
      },
      ".element3": {
        length: 80,
      },
    },
    1200: {
      // Breakpoint for screens larger than 1200px
      ".element1": {
        length: 20,
      },
      ".element2": {
        length: 30,
      },
      ".element3": {
        length: 100,
      },
    },
  };

  // Function to apply the appropriate options to each element based on the current viewport width
  function applyOptions() {
    const viewportWidth = $(window).width();
    let options = {};

    // Iterate through each class and merge the default options with the breakpoint-specific options
    Object.keys(classOptions).forEach((className) => {
      options[className] = {
        ...classOptions[className],
        ...breakpointOptions[viewportWidth]?.[className],
      };
    });

    // Initialize Cuttr for each element with the appropriate options
    Object.keys(options).forEach((className) => {
      $(className).Cuttr(options[className]);
    });
  }

  // Initialize Cuttr with the default options for each class
  applyOptions();

  // Re-apply the appropriate options each time the viewport width changes
  $(window).resize(applyOptions);
});
