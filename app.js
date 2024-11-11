/* Created by Tivotal */

let slider = document.querySelector(".slider");
let wrapper = document.querySelector(".wrapper");

let isMouseDown = false;
let x;

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
      this.classList.add('animate-click');
      // Remove the class after animation ends
      setTimeout(() => {
        this.classList.remove('animate-click');
      }, 500); // Matches animation duration
    });
  });



slider.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  x = e.offsetX - wrapper.offsetLeft;
  slider.style.cursor = "grabbing";
  wrapper.style.transition = "0s";
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
  isMouseDown = false;
  wrapper.style.transition = "0.5s";
});

slider.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  wrapper.style.left = `${e.offsetX - x}px`;

  let slider_rect = slider.getBoundingClientRect();
  let wrapper_rect = wrapper.getBoundingClientRect();

  if (parseInt(wrapper.style.left) > 0) {
    wrapper.style.left = 0;
  } else if (wrapper_rect.right < slider_rect.right) {
    wrapper.style.left = `-${wrapper_rect.width - slider_rect.width}px`;
  }
});

let btns = document.querySelectorAll(".btn");

btns[0].addEventListener("click", () => {
  let slider_rect = slider.getBoundingClientRect();
  let wrapper_rect = wrapper.getBoundingClientRect();
  wrapper.style.left = `${wrapper_rect.left + 200}px`;
  if (parseInt(wrapper.style.left) > 0) {
    wrapper.style.left = 0;
  } else if (wrapper_rect.right < slider_rect.right) {
    wrapper.style.left = `${wrapper_rect.left + 200}px`;
  }
});

btns[1].addEventListener("click", () => {
  let slider_rect = slider.getBoundingClientRect();
  let wrapper_rect = wrapper.getBoundingClientRect();
  wrapper.style.left = `${wrapper_rect.left - 300}px`;
  if (parseInt(wrapper.style.left) > 0) {
    wrapper.style.left = 0;
  } else if (wrapper_rect.right < slider_rect.right) {
    wrapper.style.left = `-${wrapper_rect.width - slider_rect.width}px`;
  }
});