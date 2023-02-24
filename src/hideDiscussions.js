window.addEventListener("load", function () {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    if (section.querySelector(".discussions")) {
      section.style.display = "none";
    }
  });
});

document
  .querySelector('script[src*="embed.js"]')
  .addEventListener("error", function () {
    console.error(`Failed to load resource: ${window.location.href}`);
  });
