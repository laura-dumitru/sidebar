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

drag.addEventListener("pointerdown", startDrag);

document.addEventListener("pointerup", (event) => {
  if (visibilityPercentage > 99) {
    drag.innerHTML = '<i data-lucide="chevrons-left"></i>';
  } else if (visibilityPercentage < 1) {
    drag.innerHTML = '<i data-lucide="chevrons-right"></i>';
  }
  //console.log(event); FIXME
  lucide.createIcons();
  stopDrag(event);

  const attribute = event.target.getAttribute("data-lucide");

  if (attribute === "chevron-up") {
    console.log("ARROW UP");
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    updateImage(); // Update the displayed image
  }

  if (attribute === "chevron-down") {
    console.log("ARROW DOWN");
    currentIndex = (currentIndex + 1) % products.length;
    updateImage();
  }
});

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
}

function stopDrag() {
  animation();
  document.removeEventListener("pointermove", handleMove);
}

function handleMove(event) {
  const width = sidebar.clientWidth;
  const x = event.clientX;

  // Calculate the percentage of sidebar visibility based on pointer position
  visibilityPercentage = Math.max(0, Math.min(100, ((x - width) / width) * 100));
  // Calculate the translateX value to move the sidebar
  const translateValue = `${-85 + (visibilityPercentage / 100) * 85}%`;
  // Set the sidebar's position accordingly
  sidebar.style.transform = `translateX(${translateValue})`;

  /*/ Adjust content visibility based on sidebar visibility
  if (visibilityPercentage > 0) {
    content.style.visibility = "visible";
  } else {
    content.style.visibility = "hidden";
  }*/
}

function updateImage() {
  const image = document.querySelector(".image");
  const paragraph = document.querySelector(".productname");

  image.src = products[currentIndex];
  paragraph.textContent = productNames[currentIndex];
}
