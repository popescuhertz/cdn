const elementsToRemove = document.querySelectorAll(".w-dyn-bind-empty");

elementsToRemove.forEach(function (element) {
  element.parentNode.removeChild(element);
});
