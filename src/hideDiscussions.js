window.addEventListener("load", function () {
  var sections = document.querySelectorAll(".section");

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];

    if (section.querySelector(".discussions")) {
      section.style.display = "none";
    }
  }
});

document
  .querySelector('script[src*="embed.js"]')
  .addEventListener("error", function () {
    console.error("Failed to load resource: net::ERR_NAME_NOT_RESOLVED");
  });
