const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
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
    if (header) {
      const embedState = header.getAttribute("data-embed-state");
      console.log(`Embed state for section ${section.id}: ${embedState}`);
      if (embedState === "error") {
        section.style.display = "none";
        console.log(`Hiding section ${section.id}`);
      } else {
        section.style.display = "block";
        console.log(`Showing section ${section.id}`);
      }
    }
  }
});
