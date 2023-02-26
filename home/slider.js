const mainSlider = new Flickity(".slider-main", {
  percentPosition: false,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
  fade: true,
  imagesLoaded: true,
  dragThreshold: 100,
  autoPlay: 5000,
  cellAlign: "left",
  pauseAutoPlayOnHover: true,
});

// Initialize the thumbnails slider and link it to the main slider
const thumbnailsSlider = new Flickity(".slider-thumbs", {
  asNavFor: ".slider-main",
  cellSelector: ".carousel-cell-thumb",
  pageDots: false,
  prevNextButtons: false,
  freeScroll: true,
  dragThreshold: 30,
  freeScrollFriction: 0.04,
  wrapAround: true,
  imagesLoaded: true,
  cellAlign: "left",
  pauseAutoPlayOnHover: true,
});

// Stop the main slider when hovering over the thumbnails
thumbnailsSlider.on("mouseenter", () => {
  mainSlider.stopPlayer();
});

// Resume the main slider when leaving the thumbnails
thumbnailsSlider.on("mouseleave", () => {
  mainSlider.playPlayer();
});

const searchBarInput = document.querySelector(".search-input");
const searchBar = document.querySelector(".search");

searchBarInput.addEventListener("focus", () => {
  searchBar.style.boxShadow = "0 0 1px 1px #f2f2f2";
});

searchBarInput.addEventListener("blur", () => {
  searchBar.style.boxShadow = "none";
});

// Position the second slider based on screen width
const flickitySliders = document.getElementsByClassName("flickity-slider");

if (flickitySliders.length >= 2) {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 991) {
    flickitySliders[1].style.left = "4rem";
  } else if (screenWidth >= 480 && screenWidth < 991) {
    flickitySliders[1].style.left = "2rem";
  } else {
    flickitySliders[1].style.left = "1rem";
  }
}
