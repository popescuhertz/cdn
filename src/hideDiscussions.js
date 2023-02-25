// Find all elements with class "section"
var sections = document.querySelectorAll(".section");

// Listen for errors on the "embed.js" script
var embedScript = document.querySelector('script[src*="embed.js"]');
embedScript.addEventListener("error", function () {
  // If an error occurs, log a message to the console and hide sections with .discussions
  console.error("Failed to load resource: net::ERR_NAME_NOT_RESOLVED");
  sections.forEach(function (section) {
    if (section.querySelector(".discussions")) {
      section.style.display = "none";
    }
  });
});

// Wait for the page to finish loading
window.addEventListener("load", function () {
  // Find all elements with class "section"
  var sections = document.querySelectorAll(".section");

  // Loop over the sections
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];

    // Check if the section has a descendant with class "discussions"
    if (section.querySelector(".discussions")) {
      // If it does, set a flag indicating that it should be hidden
      var shouldHide = true;
    }
  }

  embedScript.addEventListener("load", function () {
    // If the script loads successfully, log a message to the console and unhide sections with .discussions
    console.log("Embed script loaded successfully");
    if (shouldHide) {
      sections.forEach(function (section) {
        if (section.querySelector(".discussions")) {
          section.style.display = "";
        }
      });
    }
  });
});
