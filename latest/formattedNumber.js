function formatNumber(num) {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 10000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num >= 10000 && num < 1000000) {
    return Math.round(num / 1000) + "K";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
}

const formattedElements = document.querySelectorAll(".formatted");

formattedElements.forEach((element) => {
  const originalNum = parseInt(element.textContent.trim());

  if (isNaN(originalNum)) {
    console.error(
      `Invalid number for element with class "formatted": ${element.textContent}`
    );
    return;
  }

  element.textContent = formatNumber(originalNum);
});
