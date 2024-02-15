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

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
//const content = sidebar.content

const images = document.querySelectorAll(".image");
const icon = sidebar.querySelector(".arrow");
//let isDragging = false; // Flag to indicate whether dragging is active

sidebar.addEventListener("pointerdown", startDrag);
document.addEventListener("pointerup", stopDrag);

function startDrag(event) {
  //isDragging = true; // Set dragging flag to true when drag starts
  document.addEventListener("pointermove", handleMove);
}

function stopDrag() {
  //isDragging = false; // Set dragging flag to false when drag stops
  document.removeEventListener("pointermove", handleMove);
}

function handleMove(event) {
  event.preventDefault();
  //if (!isDragging) return; // Exit if dragging is not active
  //const width = sidebar.offsetWidth; // Get the width of the sidebar container

  const width = sidebar.clientWidth;

  const x = event.clientX; //offsetX

  console.log(width); //sidebar.offsetWidth

  //if (x > 0 && x < sidebar.clientWidth)
  sidebar.style.transform = `translateX(calc(${x}px - 100%))`; //calc()

  //sidebar.style.width = "50%";

  //content.style.visibility = "visible";
}

/*
if (x > sidebarDrag.size.width && x <= width) {
  // 390 (is the right edge of the screen)
  sidebar.style.transform = `translateX(${x - width}px)`; // translateX refers by default to the left edge of the gallery

  sidebarOpened = true;
  mediator("Sidebar open");
}
*/
