$(document).ready(function () {
  // Default options for all elements
  var defaultOptions = {
    truncate: "words",
    length: 12,
  };

  // Truncation options for different breakpoints and classes
  var options = [
    {
      class: ".element-a",
      breakpoints: [
        { width: 768, options: { truncate: "words", length: 8 } },
        { width: 992, options: { truncate: "characters", length: 50 } },
      ],
    },
    {
      class: ".element-b",
      breakpoints: [
        {
          width: 768,
          options: {
            truncate: "words",
            length: 6,
          },
        },
        {
          width: 992,
          options: {
            truncate: "characters",
            length: 30,
          },
        },
      ],
    },
  ];

  // Loop through each set of options
  options.forEach(function (option) {
    // Loop through each breakpoint for this class
    option.breakpoints.forEach(function (breakpoint) {
      // Apply the options for this breakpoint to the element
      var optionsForBreakpoint = $.extend(
        {},
        defaultOptions,
        breakpoint.options
      );
      $(option.class).responsiveCuttr(optionsForBreakpoint, breakpoint.width);
    });
  });
});
