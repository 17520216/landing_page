var initPhotoSwipeFromDOM = function (gallerySelector) {
  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function (el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      linkEl,
      size,
      item;

    for (var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute("data-size").split("x");

      // create slide object
      item = {
        src: linkEl.getAttribute("href"),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };

      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute("src");
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    var eTarget = e.target || e.srcElement;

    // find root element of slide
    var clickedListItem = closest(eTarget, function (el) {
      return el.tagName && el.tagName.toUpperCase() === "FIGURE";
    });

    if (!clickedListItem) {
      return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;

    for (var i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }

    if (index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function () {
    var hash = window.location.hash.substring(1),
      params = {};

    if (hash.length < 5) {
      return params;
    }

    var vars = hash.split("&");
    for (var i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      var pair = vars[i].split("=");
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function (
    index,
    galleryElement,
    disableAnimation,
    fromURL
  ) {
    var pswpElement = document.querySelectorAll(".pswp")[0],
      gallery,
      options,
      items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute("data-pswp-uid"),

      getThumbBoundsFn: function (index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
          pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },
    };

    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if (isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll(gallerySelector);

  for (var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

$(window).load(function () {
  initPhotoSwipeFromDOM(".carousel-img");
});

// document.querySelector('.btnmenu').addEventListener('click',function(e){
//     e.stopPropagation()
//     this.classList.toggle('clicked')
//     document.querySelector('.menu').classList.toggle('--active')
// })
$(".btnmenu").on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("clicked");
  $(".menu").toggleClass("--active");
});
let $language_drop = $(".language__drop");
let $language_text = $(".language__text");
$language_text.on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("clicked");
  $language_drop.toggleClass("--active");
});
// let language_drop = document.querySelector('.language__drop');
// let language_text = document.querySelector('.language__text');
// language_text.addEventListener('click',function(e){
//     e.stopPropagation()
//     this.classList.toggle('clicked')
//     language_drop.classList.toggle('--active')
// })
$("body").on("click", function () {
  $language_drop.removeClass("--active");
  $(".menu").removeClass("--active");
  $(".btnmenu").removeClass("clicked");
});
// document.body.addEventListener('click',function(){
//     language_drop.classList.remove('--active')
//     document.querySelector('.menu').classList.remove('--active')
//     document.querySelector('.btnmenu').classList.remove('clicked')
// })
$(".language__drop a").each(function (e) {
  $(".language__drop a").on("click", function (e) {
    e.preventDefault();
    let text = this.innerText;
    $(".language__text span").text(text);
  });
});
// language_drop.querySelectorAll('a').forEach((e, i) => {
//     e.addEventListener('click', function(e){
//         e.preventDefault()
//         let text = this.innerText
//         document.querySelector('.language__text span').innerText=text
//     })
// })
// document.querySelector('.footer__backtotop a').addEventListener('click',function(e){
//     e.preventDefault;
//     scrollToElement(this);
// })

let heightFooter = $(".footer").height();
$(window).on("scroll", function () {
  let scrollTop = window.pageYOffset;
  if (
    scrollTop > 100 &&
    scrollTop + $(window).height() < document.body.scrollHeight - heightFooter
  ) {
    $(".back-to-top").addClass("--active");
  } else {
    $(".back-to-top").removeClass("--active");
  }
});

// let heightFooter = document.querySelector('footer').offsetHeight;
// window.addEventListener('scroll',function(){
//     let scrollTop = window.pageYOffset;
//     console.log(scrollTop);
//     if (scrollTop > 100 && scrollTop+$(window).height() < document.body.scrollHeight-heightFooter){
//         document.querySelector('.back-to-top').classList.add('--active')
//     } else{
//         document.querySelector('.back-to-top').classList.remove('--active')
//     }
// })

$(".back-to-top").on("click", function (e) {
  e.preventDefault;
  scrollToElement(this);
});
$(".footer__backtotop a").on("click", function (e) {
  e.preventDefault;
  scrollToElement(this);
});

function scrollToElement(element) {
  let hash = element.hash;
  $("html, body").animate(
    {
      scrollTop: $(hash).offset().top,
    },
    500,
    function () {
      window.location.hash = hash;
    }
  );
}

let $slider = document.querySelector(".slider");
let $header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset;
  if (scrollTop > $slider.offsetHeight - $header.offsetHeight) {
    $header.classList.add("--active");
  } else {
    $header.classList.remove("--active");
  }
});
let iframeVideo = document.querySelector("#videoIframe");
document.querySelectorAll(".play__button").forEach((e) =>
  e.addEventListener("click", function () {
    let videoSrc = this.getAttribute("data-video-scr");
    iframeVideo.src = "https://www.youtube.com/embed/" + videoSrc;
    document.querySelector(".pop-video").style.display = "flex";
  })
);
document
  .querySelector(".pop-video .close")
  .addEventListener("click", function () {
    document.querySelector(".pop-video").style.display = "none";
  });

let $carousel = $(".carousel-main");
$carousel.flickity({
  cellAlign: "left",
  contain: true,
  draggable: true,
  wrapAround: true,
  prevNextButtons: false,
});
$(".slider__bottom-control .--prev").on("click", function () {
  $carousel.flickity("previous");
});
$(".slider__bottom-control .--next").on("click", function () {
  $carousel.flickity("next");
});

$carousel.on("settle.flickity", function (event, index) {
  let num = (index + 1).toString().padStart(2, "0");
  console.log(num);
  $(".number").text(num);
});

// let $sliderItem= document.querySelectorAll('.slider__item')
// let current=0;
// let $sliderDot=document.querySelectorAll('.slider .dots li')
// let $sliderNum=document.querySelector('.slider__bottom .number')
// document.querySelector('.slider__bottom .--prev').addEventListener('click', function(){
//     if(current>0){
//         slideTo(current-1)
//         // $sliderItem[current].classList.remove('--active')
//         // $sliderItem[current-1].classList.add('--active')
//         // $sliderDot[current].classList.remove('--active')
//         // $sliderDot[current-1].classList.add('--active')
//         // current--;

//     }
//     // $sliderNum.innerText=(current+1).toString().padStart(2,'0')
// })
// document.querySelector('.slider__bottom .--next').addEventListener('click', function(){
//     if(current<$sliderItem.length){
//         slideTo(current+1)
//         // $sliderItem[current+1].classList.add('--active')
//         // $sliderItem[current].classList.remove('--active')
//         // $sliderDot[current+1].classList.add('--active')
//         // $sliderDot[current].classList.remove('--active')
//         // current++;
//     }
//     // $sliderNum.innerText=(current+1).toString().padStart(2,'0')
// })
// function slideTo(to){
//     $sliderItem[to].classList.add('--active')
//     $sliderItem[current].classList.remove('--active')
//     $sliderDot[to].classList.add('--active')
//     $sliderDot[current].classList.remove('--active')
//     current=to;
//     $sliderNum.innerText=(to+1).toString().padStart(2,'0')
// }
// $sliderDot.forEach((e,i)=>{
//     e.addEventListener('click',function(){
//         slideTo(i)
//     })
// })
// const sliders = [
//     {
//         title: "wooder",
//         img: src="img/slider2.jpg",
//         sp:1
//     },
//     {
//         title: "bedroom",
//         img: src="https://images6.alphacoders.com/976/thumb-1920-976330.jpg",
//         sp:2
//     },
//     {
//         title: "wooder",
//         img: src="img/slider4.jpg",
//         sp:3
//     },
//   ];
// dots=document.querySelectorAll('.dots ul li');
// const sp=document.querySelector('.number') ;
// const img=document.getElementById('slider-img');
// const id=document.getElementById('titleId');
// let cur=0;
// let prev=document.querySelector('.--prev');
// let next=document.querySelector('.--next');

// window.addEventListener("DOMContentLoaded",function(){
//     showSlider(cur);
// })

// function showSlider(slide){
//     dots[cur].classList.add('--active')
//     const item=sliders[slide];
//     img.src=item.img;
//     id.innerText=item.title;
//     sp.innerText=item.sp.toString().padStart(2,'0');
// }
// next.addEventListener('click',function(){
//     dots[cur].classList.remove('--active')
//     cur++;
//     if(cur>sliders.length-1){
//         cur=0
//     }
//     showSlider(cur);
// })
// prev.addEventListener('click',function(){
//     dots[cur].classList.remove('--active')
//     cur--;
//     if(cur<0){
//         cur=sliders.length-1;
//     }
//     showSlider(cur);
// })
// dots.forEach((e,i)=>{
//     e.addEventListener('click',function(){
//         dots[cur].classList.remove('--active');
//         cur=i;
//         dots[i].classList.add('--active');
//         showSlider(i);
//     })
// })
$(".section-ac").on("click", function () {
  let panel = $(this).next();
  $(".panel.active").stop().slideUp().removeClass("active");
  panel.stop().toggleClass("active");
  panel.stop().slideToggle(300);
});
let $nav = $(".navigation li a");

function scrollNav(sel) {
  let curTop = $(sel).position().top;
  let heightCur = $(sel).outerHeight();
  let scrollTop = $(window).scrollTop();
  if (scrollTop + 200 > curTop && scrollTop + 200 < curTop + heightCur) {
    $nav.filter("[data-section='" + sel + "']").addClass("active");
  } else {
    $nav.filter("[data-section='" + sel + "']").removeClass("active");
  }
}
let arr = [];
for (let i = 0; i < $nav.length; i++) {
  let k = $nav[i].getAttribute("data-section");
  arr.push(k);
}
$(window).on("scroll", function () {
  for (let i = 0; i < arr.length; i++) {
    scrollNav(arr[i]);
  }
});
$(".header a").on("click", function (e) {
  e.preventDefault();
  scrollToElement(this);
});

// let $menu=$('.navigation a')
// function scrollMenu(selector){
//     let topCur=$(selector).position().top;
//     let heightCur=$(selector).outerHeight();
//     let scrollTop=$(window).scrollTop();
//     if  (scrollTop+100>topCur && scrollTop+100<topCur+heightCur){
//        $menu.filter("[data-section='"+selector+"']").addClass('active')
//     } else{
//         $menu.filter("[data-section='"+selector+"']").removeClass('active')
//     }
// }
// let arr=[];
// for(let i=0; i<$menu.length;i++){
//     let k=$menu[i].getAttribute("data-section");
//     arr.push(k);
// }

// $(window).on('scroll', function(){
//     for(let i=0; i<arr.length;i++){
//         scrollMenu(arr[i]);
//     }
// })
let $list = $(".option__item");
$list.hover(
  function () {
    $(this).siblings().addClass("--active");
  },
  function () {
    $(this).siblings().removeClass("--active");
  }
);

gsap.fromTo(
  ".navigation li a",
  { top: -50 },
  { top: 0, duration: 1, stagger: 0.2 }
);

$(window).on("load", function () {
  let $img = $(".images");
  $img.flickity({
    draggable: true,
    freeScroll: true,
    // groupCells: 4,
    wrapAround: true,
    fullscreen: true,
    prevNextButtons: false,
    pageDots: false,
    // lazyLoad: 2
  });
});

// setTimeout(function () {
//   $("").addClass("highlight");
// }, 6000);
// $(window).on("load", function () {
//   let $name = $(".name");
//   let $showname = $(".showname");
//   setTimeout(function () {
//     $(".hello").addClass("activehello");
//   }, 1000);
//   setTimeout(function () {
//     $(".hello").removeClass("activehello");
//   }, 2000);
//   setTimeout(function () {
//     $(".name").addClass("activename");
//   }, 3000);
//   setTimeout(function () {
//     $(".name").removeClass("activename");
//   }, 4000);
//   $showname.addClass("over");
// });
