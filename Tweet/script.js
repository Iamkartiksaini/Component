// Get reference to the outer and inner elements
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

// Add event listeners to the outer and inner elements
outer.addEventListener("click", function (event) {
  console.log("Outer element clicked!");
});

inner.addEventListener("click", function (event) {
  console.log("Inner element clicked!");
  // Stop further propagation of the event
  // event.stopPropagation();
  // Stop further propagation of the event and prevent other event listeners on the same element from being triggered
  event.stopImmediatePropagation();
});
