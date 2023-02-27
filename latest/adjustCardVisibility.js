function adjustCardVisibility() {
  const screenWidth = window.innerWidth;
  const gridConfigs = [
    {
      className: ".grid.is-horizontal-cards",
      cardClassName: ".card.is-horizontal",
      maxRows: 2,
      breakpoints: [
        {
          breakpoint: 865,
          maxRows: 3,
        },
      ],
    },
    {
      className: ".grid.is-vertical-cards",
      cardClassName: ".card.is-vertical",
      maxRows: 1,
      breakpoints: [
        {
          breakpoint: 865,
          maxRows: 2,
        },
      ],
    },
    {
      className: ".grid.is-vertical-cards.is-small",
      cardClassName: ".card.is-vertical.is-small",
      maxRows: 1,
      breakpoints: [
        {
          breakpoint: 865,
          maxRows: 1,
        },
      ],
    },
  ];

  gridConfigs.forEach((config) => {
    const { className, cardClassName, maxRows, breakpoints } = config;
    const grids = document.querySelectorAll(className);

    grids.forEach((grid) => {
      const gridWidth = grid.offsetWidth;
      const cardWidth = grid.querySelector(cardClassName).offsetWidth;

      let currentMaxRows = maxRows;
      for (let i = 0; i < breakpoints.length; i++) {
        const breakpoint = breakpoints[i];
        if (screenWidth < breakpoint.breakpoint) {
          currentMaxRows = breakpoint.maxRows;
        } else {
          break;
        }
      }

      const numCardsPerColumn = Math.floor(gridWidth / cardWidth);
      const maxCards = numCardsPerColumn * currentMaxRows;
      const cards = grid.querySelectorAll(cardClassName);
      cards.forEach((card, index) => {
        if (index >= maxCards) {
          card.style.display = "none";
        } else {
          card.style.display = "";
        }
      });
    });
  });
}

window.addEventListener("load", adjustCardVisibility);
window.addEventListener("resize", adjustCardVisibility);
