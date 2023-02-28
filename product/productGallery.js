const productGallery = new Flickity(".product-image-gallery", {
  imagesLoaded: true,
  contain: true,
  wrapAround: true,
  freeScroll: true,
  pageDots: false,
  percentPosition: false,
  prevNextButtons: false,
  cellAlign: "left",
});

let dragStartX = 0;
const dragThreshold = 10;

productGallery.on("dragStart", function (event, pointer) {
  dragStartX = pointer.clientX;
});

productGallery.on("dragMove", function (event, pointer) {
  const dragDistance = Math.abs(pointer.clientX - dragStartX);
  if (dragDistance > dragThreshold) {
    productGallery.slider.style.pointerEvents = "none";
  }
});

productGallery.on("dragEnd", function () {
  productGallery.slider.style.pointerEvents = "auto";
});

const flickitySlider = document.querySelector(".flickity-slider");

if (flickitySlider) {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 991) {
    flickitySlider.style.left = "1.45rem";
  } else {
    flickitySlider.style.left = ".875rem";
  }
}

const hamburgerMenuIcon = document.querySelector(".hamburger-menu-icon");
const productImageGallery = document.querySelector(".product-image-gallery");
const overlay = document.querySelector(".overlay");

hamburgerMenuIcon.addEventListener("click", function () {
  if (hamburgerMenuIcon.classList.contains("is-open")) {
    productImageGallery.style.zIndex = 2;
  }
});

overlay.addEventListener("click", function () {
  productImageGallery.style.zIndex = 9999;
});

hamburgerMenuIcon.addEventListener("click", function () {
  if (hamburgerMenuIcon.classList.contains("is-close")) {
    productImageGallery.style.zIndex = 9999;
  }
});
