const priceElements = document.querySelectorAll(".price");
priceElements.forEach((priceElement) => {
  const priceValue = parseFloat(
    priceElement.textContent.replace(/[^0-9.-]+/g, "")
  );
  priceElement.textContent = formatPrice(priceValue);
});

function formatPrice(price) {
  return (
    "$ " +
    price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
