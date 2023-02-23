const productRatingWrapper = document.querySelector(".product-rating-wrapper");
const productRatingContainer = document.querySelectorAll(
  ".product-rating-container.is-header"
);

const containerHeight = productRatingContainer[0].clientHeight;

if (productRatingWrapper.clientHeight >= containerHeight * 2) {
  const lastProductRating =
    productRatingContainer[productRatingContainer.length - 1];
  lastProductRating.style.paddingLeft = 0;

  const secondToLastProductRating =
    productRatingContainer[productRatingContainer.length - 2];
  secondToLastProductRating.style.borderRight = "none";
}
