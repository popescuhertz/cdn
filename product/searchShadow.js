const searchBarInput = document.querySelector(".search-input");
const searchBar = document.querySelector(".search");

searchBarInput.addEventListener("focus", () => {
  searchBar.style.boxShadow = "0 0 1px 1px #f2f2f2";
});

searchBarInput.addEventListener("blur", () => {
  searchBar.style.boxShadow = "none";
});
