lucide.createIcons();
/*
const drag = document.querySelector(".drag");
const sidebar = document.querySelector(".sidebar");

drag.addEventListener("pointermove", handleMove);

function handleMove(event) {
    const x = event.pageX;
  const width = sidebar.offsetWidth; // Get the width of the sidebar container
  drag.style.width = width + "px";
  console.log(x);
}*/

const drag = document.querySelector(".drag");
const sidebar = document.querySelector(".sidebar");
const images = document.querySelectorAll(".image");
const icon = drag.querySelector(".arrow");
let isDragging = false; // Flag to indicate whether dragging is active

drag.addEventListener("pointerdown", startDrag);
document.addEventListener("pointerup", stopDrag);

function startDrag(event) {
  isDragging = true; // Set dragging flag to true when drag starts
  document.addEventListener("pointermove", handleMove);
}

function stopDrag() {
  isDragging = false; // Set dragging flag to false when drag stops
  document.removeEventListener("pointermove", handleMove);
}

function handleMove(event) {
  if (!isDragging) return; // Exit if dragging is not active

  const width = sidebar.offsetWidth; // Get the width of the sidebar container
  drag.style.width = width + "px"; // Set the width of the drag element to fit the sidebar
  images.forEach((image) => {
    image.style.opacity = "1";
    icon.style.opacity = "1";
    icon.style.position = "relative";
    icon.style.top = "50px";
  });
}
