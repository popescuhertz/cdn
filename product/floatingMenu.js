const floatingMenu = $(".main-menu");
const main = $(".main");
const floatingMenuTop = floatingMenu.offset().top - main.offset().top - 8;

floatingMenu.hide();

main.on("scroll", () => {
  const scrollPosition = main.scrollTop();

  if (scrollPosition >= floatingMenuTop) {
    floatingMenu.fadeIn(200);
  } else {
    floatingMenu.fadeOut(200);
  }
});

$(window).on("scroll", () => {
  const breakpoint = 480;

  const firstSection = $(".section");
  const firstSectionHeight =
    firstSection.offset().top -
    2 * parseFloat(getComputedStyle(document.documentElement).fontSize) -
    24;

  if (window.innerWidth < breakpoint) {
    if (window.scrollY >= firstSectionHeight) {
      floatingMenu.fadeIn(200);
    } else {
      floatingMenu.fadeOut(200);
    }
  }
});
