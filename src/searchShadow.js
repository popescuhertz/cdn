// Add shadow to search bar when input is focused
const searchBarInput = document.querySelector(".search-input");
const searchBar = document.querySelector(".search");
searchBarInput.addEventListener("focus", () => {
  searchBar.style.boxShadow = "0 0 1px 1px #191919";
});
