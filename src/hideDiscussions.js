// Get all sections with class "section"
const sections = document.querySelectorAll(".section");

// Loop through each section
sections.forEach((section) => {
  // Check if the section has a child element matching the specified selector
  const iframe = section.querySelector(
    ".product-section > .discussions > .discussion-embed > #discourse-comments > iframe"
  );
  if (
    iframe &&
    iframe.contentDocument &&
    iframe.contentDocument.documentElement
  ) {
    const header =
      iframe.contentDocument.documentElement.querySelector("header");
    // Check if the header has data-embed-state="error"
    if (header && header.getAttribute("data-embed-state") === "error") {
      // Hide the section
      section.style.display = "none";
    } else {
      // Show the section
      section.style.display = "block";
    }
  }
});
