window.addEventListener("load", function () {
  var iframe = document.getElementById("discourse-embed-frame");
  var section = document.querySelector(".section.is-product");

  if (iframe && iframe.contentWindow) {
    iframe.contentWindow.addEventListener("DOMContentLoaded", function () {
      var state =
        iframe.contentDocument.documentElement.getAttribute("data-embed-state");

      if (
        state === "error" ||
        iframe.contentDocument.body.innerHTML.trim() === ""
      ) {
        section.style.display = "none";
      }
    });
  }
});
