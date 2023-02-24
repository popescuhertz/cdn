// Wait for the page to finish loading
window.addEventListener("load", function () {
  // Find all elements with class "section"
  const sections = document.querySelectorAll(".section");

  // Loop over the sections
  sections.forEach((section) => {
    // Check if the section has a descendant with class "discussions"
    if (section.querySelector(".discussions")) {
      // If it does, hide the section
      section.style.display = "none";
    }
  });
});

// Listen for errors on the "embed.js" script
document
  .querySelector('script[src*="embed.js"]')
  .addEventListener("error", function () {
    // If an error occurs, log a message to the console
    console.error(`Failed to load resource: ${window.location.href}`);
  });
