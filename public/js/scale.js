// scale.js
function resizePage() {
  // shrink to 75% if viewport wider than 1600px
  const scale = window.innerWidth > 1600 ? 0.75 : 1;
  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = "top left";
}

// run on load and resize
window.addEventListener("resize", resizePage);
window.addEventListener("load", resizePage);
