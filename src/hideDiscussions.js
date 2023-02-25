window.addEventListener("load", function () {
  var sections = document.querySelectorAll(".section");
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (section.querySelector(".discussions")) {
      section.style.display = "none";
    }
  }
});

var embedJS = document.querySelector('script[src*="embed.js"]');
if (embedJS) {
  embedJS.addEventListener("error", function () {
    console.error("Failed to load resource: net::ERR_NAME_NOT_RESOLVED");
    var sections = document.querySelectorAll(".section");
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section.querySelector(".discussions")) {
        section.style.display = "none";
      }
    }
  });
} else {
  var sections = document.querySelectorAll(".section");
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (section.querySelector(".discussions")) {
      section.style.display = "none";
    } else {
      section.style.display = "block"; // or whatever default display value you want to use
    }
  }
}
