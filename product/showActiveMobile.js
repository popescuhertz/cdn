// get the first element with class 'active-page'
const activePage = document.querySelector(".active-page");

// if the screen width is less than 480px, add 'display:block' to the first 'active-page'
if (window.innerWidth < 480) {
  activePage.style.display = "block";
}
