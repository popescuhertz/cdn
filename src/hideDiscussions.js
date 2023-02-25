const iframe = document.querySelector(".section iframe");

iframe.addEventListener("load", function () {
  // iframe has loaded successfully
});

iframe.addEventListener("error", function () {
  const section = iframe.closest(".section");
  section.style.display = "none";
});
