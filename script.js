lucide.createIcons();

const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const images = document.querySelectorAll(".image");
const icon = sidebar.querySelector(".arrow");
const pulseArrow = document.querySelector(".right");

//let isDragging = false; // Flag to indicate whether dragging is active

sidebar.addEventListener("pointerdown", startDrag);
document.addEventListener("pointerup", stopDrag);

function animation() {
  gsap.to(".right", {
    x: "+=5", // Increase position to the right by 10 units
    repeat: 4, // Repeat indefinitely
    yoyo: true, // Reverse the animation to return to the initial position
    ease: "power1.inOut", // Use a smooth easing function
    duration: 0.3, // Duration of each animation cycle
  });
}
animation();

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

  const width = sidebar.clientWidth;
  const x = event.clientX;

  // Calculate the percentage of sidebar visibility based on pointer position
  const visibilityPercentage = Math.max(0, Math.min(100, ((x - width) / width) * 100));

  // Calculate the translateX value to move the sidebar
  const translateValue = `${-85 + (visibilityPercentage / 100) * 85}%`;
  // Set the sidebar's position accordingly
  sidebar.style.transform = `translateX(${translateValue})`;

  // Adjust content visibility based on sidebar visibility
  if (visibilityPercentage > 0) {
    content.style.visibility = "visible";
  } else {
    content.style.visibility = "hidden";
  }
}

/*
if (x > sidebarDrag.size.width && x <= width) {
  // 390 (is the right edge of the screen)
  sidebar.style.transform = `translateX(${x - width}px)`; // translateX refers by default to the left edge of the gallery

  sidebarOpened = true;
  mediator("Sidebar open");
}
*/
