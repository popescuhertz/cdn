function setLabelBorderRadius() {
  const elementsToRemove = document.querySelectorAll(
    ".w-dyn-bind-empty, .w-condition-invisible"
  );
  elementsToRemove.forEach(function (element) {
    element.parentNode.removeChild(element);
  });

  const labels = document.querySelectorAll(".card-label");

  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    const labelTexts = label.querySelectorAll(".card-label-text");
    const numTexts = labelTexts.length;
    const isStacked =
      numTexts > 1 && label.offsetHeight > labelTexts[0].offsetHeight;

    if (isStacked) {
      label.style.textAlign = "center"; // add this line
      labelTexts[0].classList.add("border-top-left");
      labelTexts[0].classList.add("border-top-right");
      labelTexts[numTexts - 1].classList.add("border-bottom-left");
      labelTexts[numTexts - 1].classList.add("border-bottom-right");

      let maxWidth = 0;
      for (let j = 0; j < numTexts; j++) {
        const text = labelTexts[j];
        const width = text.offsetWidth;
        maxWidth = Math.max(maxWidth, width);
      }

      for (let j = 0; j < numTexts; j++) {
        labelTexts[j].style.width = `${maxWidth}px`;
      }
    } else {
      label.style.textAlign = ""; // add this line
      for (let j = 0; j < numTexts; j++) {
        const text = labelTexts[j];
        if (j === 0) {
          text.classList.add("border-top-left");
          text.classList.add("border-bottom-left");
          text.classList.remove("border-top-right");
          text.classList.remove("border-bottom-right");
        } else if (j === numTexts - 1) {
          text.classList.remove("border-top-left");
          text.classList.remove("border-bottom-left");
          text.classList.add("border-top-right");
          text.classList.add("border-bottom-right");
        } else {
          text.classList.remove("border-top-left");
          text.classList.remove("border-bottom-left");
          text.classList.remove("border-top-right");
          text.classList.remove("border-bottom-right");
        }
      }
    }

    if (numTexts === 1) {
      labelTexts[0].classList.add("border-radius");
    }
  }
}

setLabelBorderRadius();
window.addEventListener("resize", setLabelBorderRadius);
