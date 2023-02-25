// select the iframe element
const iframe = document.querySelector(".section iframe");

// check the value of the data-embed-state attribute
const embedState = iframe.getAttribute("data-embed-state");

// hide the iframe if data-embed-state is "error"
if (embedState === "error") {
  iframe.style.display = "none";
}
