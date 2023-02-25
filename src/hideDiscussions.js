// select the iframe element
const iframe = document.querySelector(".section iframe");

// wait for the iframe to load its content
iframe.addEventListener("load", function () {
  // get a reference to the iframe's window object
  const iframeWindow = iframe.contentWindow;

  // get a reference to the iframe's document object
  const iframeDocument = iframeWindow.document;

  // select the element inside the iframe and get its attribute
  const embedState = iframeDocument
    .querySelector("element-selector")
    .getAttribute("data-embed-state");

  // hide the iframe if data-embed-state is "error"
  if (embedState === "error") {
    iframe.style.display = "none";
  }
});
