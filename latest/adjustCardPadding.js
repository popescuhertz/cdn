function applyVerticalCardPadding() {
  const cards = document.querySelectorAll(".card.is-vertical");

  cards.forEach((card) => {
    const imageWrapper = card.querySelector(".card-vertical-image-wrapper");
    const padding = (card.clientWidth - imageWrapper.clientWidth) / 2;
    const paddingTop = Math.min(padding, 32);
    card.style.paddingTop = `${paddingTop}px`;
  });
}

window.addEventListener("load", applyVerticalCardPadding);
window.addEventListener("resize", applyVerticalCardPadding);
