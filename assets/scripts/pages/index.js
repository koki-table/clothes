import Vue from "vue";

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

 
let btn = document.querySelector('.open-btn');
btn.addEventListener('click', function(el) {
    btn.classList.toggle('active');
})






