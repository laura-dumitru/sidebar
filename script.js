lucide.createIcons();

const sidebar = document.querySelector(".sidebar");
const drag = document.querySelector(".sidebar .drag");
const content = document.querySelector(".content");
const images = document.querySelectorAll(".image");
const icon = sidebar.querySelector(".arrow");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const chevronsSelector = "[data-lucide^='chevrons-']";
const chevrons = document.querySelector(chevronsSelector);

const products = ["images/product1.png", "images/product2.png", "images/product3.png"];
const productNames = ["Matte Lipstick", "Velvet Blush", "Porcelain Foundation"];

let visibilityPercentage;
let currentIndex = 0;

drag.addEventListener("touchstart", startDrag);
drag.addEventListener("pointerdown", startDrag);

document.addEventListener("touchend", handleIcons);
document.addEventListener("pointerup", handleIcons);

function handleIcons(event) {
  if (visibilityPercentage > 95) {
    drag.innerHTML = '<i data-lucide="chevrons-left"></i>';
  } else if (visibilityPercentage < 5) {
    drag.innerHTML = '<i data-lucide="chevrons-right"></i>';
  }
  lucide.createIcons();

  const attribute = event.target.getAttribute("data-lucide");

  if (attribute === "chevron-up") {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateImage(); // Update the displayed image
  }

  if (attribute === "chevron-down") {
    currentIndex = (currentIndex + 1) % products.length;
    updateImage();
  }

  stopDrag(event);
}

function animation() {
  gsap.to(chevronsSelector, {
    x: "+=4", // Increase position to the right by 10 units
    repeat: 3, // Repeat indefinitely
    yoyo: true, // Reverse the animation to return to the initial position
    ease: "power1.inOut", // Use a smooth easing function
    duration: 0.3, // Duration of each animation cycle
  });
}
animation();

function startDrag(event) {
  document.addEventListener("pointermove", handleMove);
  document.addEventListener("touchmove", handleMove);
  console.log("touched");
}

function stopDrag() {
  animation();
  document.removeEventListener("pointermove", handleMove);
  document.removeEventListener("touchmove", handleMove);
  console.log("Stop touching");
}

function handleMove(event) {
  const width = sidebar.clientWidth;

  let x;
  if (event.touches && event.touches.length > 0) {
    // For mobile devices, use touch event coordinates
    x = event.touches[0].clientX + width;
  } else {
    // For desktop, use mouse event coordinates
    x = event.clientX;
  }

  // Calculate the percentage of sidebar visibility based on pointer position
  visibilityPercentage = Math.max(0, Math.min(100, ((x - width) / width) * 100));

  // Calculate the translateX value to move the sidebar
  //const translateValue = `${-85 + (visibilityPercentage / 100) * 85}%`;

  const translateValue = `${-85 + (visibilityPercentage / 100) * 85}%`;

  // Set the sidebar's position accordingly
  sidebar.style.transform = `translateX(${translateValue})`;
}

function updateImage() {
  const image = document.querySelector(".image");
  const paragraph = document.querySelector(".productname");

  image.src = products[currentIndex];
  paragraph.textContent = productNames[currentIndex];
}
