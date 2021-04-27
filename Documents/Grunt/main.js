// document.querySelector(".showname").addEventListener("click", function (e) {
//   this.classList.addClass("over");
// });

// document.querySelector(".btnmenu").addEventListener("click", function (e) {
//   e.stopPropagation();
//   this.classList.toggle("clicked");
//   document.querySelector(".menu").classList.toggle("--active");
// });

// let language_drop = document.querySelector(".language__drop");
// let language_text = document.querySelector(".language__text");
// language_text.addEventListener("click", function (e) {
//   e.stopPropagation();
//   this.classList.toggle("clicked");
//   language_drop.classList.toggle("--active");
// });
// document.body.addEventListener("click", function () {
//   language_drop.classList.remove("--active");
//   document.querySelector(".menu").classList.remove("--active");
//   document.querySelector(".btnmenu").classList.remove("clicked");
// });
// language_drop.querySelectorAll("a").forEach((e, i) => {
//   e.addEventListener("click", function (e) {
//     e.preventDefault();
//     let text = this.innerText;
//     document.querySelector(".language__text span").innerText = text;
//   });
// });

// document
//   .querySelector(".footer__backtotop .test")
//   .addEventListener("click", function (e) {
//     window.scrollBy({
//       top: -document.body.offsetHeight,
//       behavior: "smooth",
//     });
//   });
// let height = document.body.offsetHeight;
// window.addEventListener("scroll", function () {
//   let scrollTop = window.pageYOffset;

//   if (scrollTop > 100 && scrollTop < height - 60) {
//     document.querySelector(".back-to-top").classList.add("--active");
//   } else {
//     document.querySelector(".back-to-top").classList.remove("--active");
//   }
// });
// document.querySelector(".back-to-top").addEventListener("click", function (e) {
//   window.scrollBy({
//     top: -document.body.offsetHeight,
//     behavior: "smooth",
//   });
// });
// let $slider = document.querySelector(".slider");
// let $header = document.querySelector(".header");
// window.addEventListener("scroll", function () {
//   let scrollTop = window.pageYOffset;
//   if (scrollTop > $slider.offsetHeight - $header.offsetHeight) {
//     $header.classList.add("--active");
//   } else {
//     $header.classList.remove("--active");
//   }
// });
// let iframeVideo = document.querySelector("#videoIframe");
// document.querySelectorAll(".play__button").forEach((e) =>
//   e.addEventListener("click", function () {
//     let videoSrc = this.getAttribute("data-video-scr");
//     iframeVideo.src = "https://www.youtube.com/embed/" + videoSrc;
//     document.querySelector(".pop-video").style.display = "flex";
//   })
// );
// document
//   .querySelector(".pop-video .close")
//   .addEventListener("click", function () {
//     document.querySelector(".pop-video").style.display = "none";
//   });

// // let $sliderItem= document.querySelectorAll('.slider__item')
// // let current=0;
// // let $sliderDot=document.querySelectorAll('.slider .dots li')
// // let $sliderNum=document.querySelector('.slider__bottom .number')
// // document.querySelector('.slider__bottom .--prev').addEventListener('click', function(){
// //     if(current>0){
// //         slideTo(current-1)
// //         // $sliderItem[current].classList.remove('--active')
// //         // $sliderItem[current-1].classList.add('--active')
// //         // $sliderDot[current].classList.remove('--active')
// //         // $sliderDot[current-1].classList.add('--active')
// //         // current--;

// //     }
// //     // $sliderNum.innerText=(current+1).toString().padStart(2,'0')
// // })
// // document.querySelector('.slider__bottom .--next').addEventListener('click', function(){
// //     if(current<$sliderItem.length){
// //         slideTo(current+1)
// //         // $sliderItem[current+1].classList.add('--active')
// //         // $sliderItem[current].classList.remove('--active')
// //         // $sliderDot[current+1].classList.add('--active')
// //         // $sliderDot[current].classList.remove('--active')
// //         // current++;
// //     }
// //     // $sliderNum.innerText=(current+1).toString().padStart(2,'0')
// // })
// // function slideTo(to){
// //     $sliderItem[to].classList.add('--active')
// //     $sliderItem[current].classList.remove('--active')
// //     $sliderDot[to].classList.add('--active')
// //     $sliderDot[current].classList.remove('--active')
// //     current=to;
// //     $sliderNum.innerText=(to+1).toString().padStart(2,'0')
// // }
// // $sliderDot.forEach((e,i)=>{
// //     e.addEventListener('click',function(){
// //         slideTo(i)
// //     })
// // })
// const sliders = [
//   {
//     title: "wooder",
//     img: (src = "img/slider2.jpg"),
//     sp: 1,
//   },
//   {
//     title: "wooder2",
//     img: (src = "https://images6.alphacoders.com/976/thumb-1920-976330.jpg"),
//     sp: 2,
//   },
//   {
//     title: "wooder3",
//     img: (src =
//       "http://cdn.home-designing.com/wp-content/uploads/2016/09/dark-bedroom-inspiration.jpg"),
//     sp: 3,
//   },
// ];
// dots = document.querySelectorAll(".dots ul li");
// const sp = document.querySelector(".number");
// const img = document.getElementById("slider-img");
// const id = document.getElementById("titleId");
// let cur = 0;
// let prev = document.querySelector(".--prev");
// let next = document.querySelector(".--next");

// window.addEventListener("DOMContentLoaded", function () {
//   showSlider(cur);
// });

// function showSlider(slide) {
//   dots[cur].classList.add("--active");
//   const item = sliders[slide];
//   img.src = item.img;
//   id.innerText = item.title;
//   sp.innerText = item.sp.toString().padStart(2, "0");
// }
// next.addEventListener("click", function () {
//   dots[cur].classList.remove("--active");
//   cur++;
//   if (cur > sliders.length - 1) {
//     cur = 0;
//   }
//   showSlider(cur);
// });
// prev.addEventListener("click", function () {
//   dots[cur].classList.remove("--active");
//   cur--;
//   if (cur < 0) {
//     cur = sliders.length - 1;
//   }
//   showSlider(cur);
// });
// dots.forEach((e, i) => {
//   e.addEventListener("click", function () {
//     dots[cur].classList.remove("--active");
//     cur = i;
//     dots[i].classList.add("--active");
//     showSlider(i);
//   });
// });
// $(".section-ac").on("click", function () {
//   let panel = $(this).netx();
//   panel.slideDown();
// });
var tl = gsap.timeline({ opacity: 0 });
let home = $(".home .title");
let info = $(".home .info");
let menu = $(".menu ul li");
tl.from(home, { opacity: 0, duration: 1, y: -100 });
tl.from(info, { opacity: 0, duration: 1, y: -100 }, "-=1");
tl.from(menu, { opacity: 0, duration: 1, stagger: 0.25, y: -100 }, "-=1");
let btn_restart = $(".btn .restart");
let btn_pause = $(".btn .pause");
let btn_reverse = $(".btn .reverse");
btn_restart.on("click", function () {
  tl.restart();
});
btn_reverse.on("click", function () {
  tl.reverse().timeScale(3);
});
btn_pause.on("click", function () {
  tl.pause();
});
