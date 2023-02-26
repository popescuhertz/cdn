// Get all elements with class "formatted"
const formattedElements = document.querySelectorAll(".formatted");

// Function to format numbers as needed
function formatNumber(num) {
  if (num < 1000) {
    return num.toString();
  } else if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return (num / 1000000).toFixed(1) + "M";
  }
}

// Loop through all elements and format their content
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
