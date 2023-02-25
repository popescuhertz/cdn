// select the section element
const section = document.querySelector(".section");

// select the iframe element
const iframe = section.querySelector("iframe");

// check if the iframe element is found
if (iframe) {
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

    // hide the section if the iframe is empty or if data-embed-state is "error"
    if (iframeDocument.body.innerHTML.trim() === "" || embedState === "error") {
      section.style.display = "none";
    }
  });
} else {
  console.log("iframe not found");
}
