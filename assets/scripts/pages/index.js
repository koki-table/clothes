import Vue from "vue";
import ScrollReveal from "scrollreveal";
import Rellax from "rellax";
import { animate } from "popmotion";

animate({
  from: 0,
  to: 100,
  onUpdate: (latest) => console.log(latest),
});

// nav
// eslint-disable-next-line no-unused-vars
var app = new Vue({
  el: "#app",
  data: {
    open: false,
  },
});

// mvスライダー
let swipeOption = {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
};
new Swiper(".swiper-container", swipeOption);

let btn = document.querySelector(".open-btn");
btn.addEventListener("click", function(el) {
  btn.classList.toggle("active");
});

// fade
ScrollReveal().reveal(".sec-mv", {
  duration: 1800, // アニメーションの完了にかかる時間
  viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
  reset: false, // 何回もアニメーション表示するか
  delay: 500,
});

ScrollReveal().reveal(".fade", {
  duration: 1600,
  reset: false,
});

// parallax
var rellax = new Rellax(".rellax", {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
});

// animate

// const { styler, spring, listen, pointer, value } = window.popmotion;

// const ball = document.querySelector("animate-target");
// const divStyler = styler(ball);
// const ballXY = value({ x: 0, y: 0 }, divStyler.set);

// listen(ball, "mousedown touchstart").start((e) => {
//   e.preventDefault();
//   pointer(ballXY.get()).start(ballXY);
// });

// listen(document, "mouseup touchend").start(() => {
//   spring({
//     from: ballXY.get(),
//     velocity: ballXY.getVelocity(),
//     to: { x: 0, y: 0 },
//     stiffness: 200,
//   }).start(ballXY);
// });
