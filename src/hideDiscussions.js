function hideSectionsWithError() {
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    const discussions = section.querySelectorAll(".discussions");
    const iframe = section.querySelector("iframe");

    if (
      discussions.length > 0 &&
      iframe &&
      iframe.dataset.embedState === "error"
    ) {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  });
}
