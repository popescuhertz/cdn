// Get all elements with class "menu-link" that also have class "w--current"
const currentLinks = document.querySelectorAll(".menu-link.w--current");

// Loop through each of the matching elements
currentLinks.forEach((link) => {
  // Check if the screen width is less than 480 pixels
  if (window.innerWidth < 480) {
    // Set the background color to transparent
    link.style.backgroundColor = "transparent";

    // Hide the ".active-page" element inside the current link
    const activePage = link.querySelector(".w--current .active-page");
    if (activePage) {
      activePage.style.display = "none";
    }
  }
});
