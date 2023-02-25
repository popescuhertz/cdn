function hideSectionsWithError() {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const discussions = section.querySelectorAll(".discussions");
    const header = section.querySelector(".discussion-embed header");
    const iframe = header ? header.querySelector("iframe") : null;

    if (
      discussions.length > 0 &&
      iframe &&
      iframe.contentDocument.querySelector("html > body > header").dataset
        .embedState === "error"
    ) {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  });
}
