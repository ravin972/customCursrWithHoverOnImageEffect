const elems = document.querySelectorAll(".elem");
const cursor = document.querySelector(".cursor");
var blur = document.querySelector("#cursor-blur");

document.querySelector("#main").addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  blur.style.left = e.clientX - 125 + "px";
  blur.style.top = e.clientY - 125 + "px";
});

elems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    const child = elem.querySelector("img");
    if (child) {
      child.style.opacity = 1;
    }
  });
  elem.addEventListener("mousemove", (event) => {
    const child = elem.querySelector("img");
    if (child) {
      child.style.left = event.clientX + "px";
      child.style.top = event.clientY + "px";
    }
  });
  elem.addEventListener("mouseleave", () => {
    const child = elem.querySelector("img");
    if (child) {
      child.style.opacity = 0;
    }
  });
});
