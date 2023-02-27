// Get references to the menu link and hamburger icon
const menuLink = document.querySelector(".menu-link");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");

// Get reference to the sidebar menu
const sidebarMenu = document.querySelector(".sidebar-menu");

// Add a click event listener to the menu link
menuLink.addEventListener("click", () => {
  // Add the z-index style to the sidebar menu
  sidebarMenu.style.zIndex = "99999";
});

// Add a click event listener to the hamburger icon
hamburgerIcon.addEventListener("click", () => {
  // Remove the z-index style from the sidebar menu
  sidebarMenu.style.zIndex = "";
});

// Check screen width on window resize
window.addEventListener("resize", () => {
  // Check screen width and add/remove event listeners as necessary
  if (window.innerWidth <= 480) {
    menuLink.addEventListener("click", () => {
      // Add the z-index style to the sidebar menu
      sidebarMenu.style.zIndex = "99999";
    });
    hamburgerIcon.addEventListener("click", () => {
      // Remove the z-index style from the sidebar menu
      sidebarMenu.style.zIndex = "";
    });
  } else {
    // Remove event listeners if screen width is greater than 480px
    menuLink.removeEventListener("click", () => {
      sidebarMenu.style.zIndex = "99999";
    });
    hamburgerIcon.removeEventListener("click", () => {
      sidebarMenu.style.zIndex = "";
    });
  }
});
