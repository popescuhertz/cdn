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

    // check if the iframe body is empty and hide the parent section element if it is
    if (iframeDocument.body.innerHTML.trim() === "") {
      section.style.display = "none";
    }
  });
} else {
  console.log("iframe not found");
}
