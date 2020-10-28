document.querySelector('.btnmenu').addEventListener('click',function(e){
    e.stopPropagation()
    this.classList.toggle('clicked')
    document.querySelector('.menu').classList.toggle('--active')
})

let language_drop=document.querySelector('.language__drop')
let language_text=document.querySelector('.language__text')
language_text.addEventListener('click',function(e){
    e.stopPropagation()
    this.classList.toggle('clicked')
    language_drop.classList.toggle('--active')
})
document.body.addEventListener('click',function(){
    language_drop.classList.remove('--active')
    document.querySelector('.menu').classList.remove('--active')
    document.querySelector('.btnmenu').classList.remove('clicked')
})
language_drop.querySelectorAll('a').forEach((e, i) => {
    e.addEventListener('click', function(e){
        e.preventDefault()
        let text = this.innerText
        document.querySelector('.language__text span').innerText=text
    })
})

document.querySelector('.footer__backtotop a').addEventListener('click',function(e){
    e.preventDefault;
    scrollToElement(this);    
})  
let height=document.body.offsetHeight;
let heightFooter=document.querySelector('footer').offsetHeight;
window.addEventListener('scroll',function(){
    let scrollTop= window.pageYOffset;
    if (scrollTop > 100 && scrollTop+$(window).height() <document.body.scrollHeight-heightFooter){
        document.querySelector('.back-to-top').classList.add('--active')
    } else{
        document.querySelector('.back-to-top').classList.remove('--active')
    }
})
document.querySelector('.back-to-top').addEventListener('click',function(e){
   e.preventDefault;
   scrollToElement(this);
}) 
function scrollToElement(element){
    let hash = element.hash;
    console.log(hash)
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    });
} 

let $slider=document.querySelector('.slider')
let $header=document.querySelector('.header')
window.addEventListener('scroll',function(){
    let scrollTop=window.pageYOffset
    if(scrollTop>$slider.offsetHeight - $header.offsetHeight){
        $header.classList.add('--active')
    }else{
        $header.classList.remove('--active')
    }
})
let iframeVideo=document.querySelector('#videoIframe')
document.querySelectorAll('.play__button').forEach((e)=>
    e.addEventListener('click', function(){
        let videoSrc=this.getAttribute('data-video-scr')
        iframeVideo.src="https://www.youtube.com/embed/"+ videoSrc
        document.querySelector('.pop-video').style.display='flex'
    })
)  
document.querySelector('.pop-video .close').addEventListener('click', function(){
    document.querySelector('.pop-video').style.display='none'
})

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
const sliders = [
    {
        title: "wooder", 
        img: src="img/slider2.jpg",
        sp:1
    },
    {
        title: "bedroom",
        img: src="https://images6.alphacoders.com/976/thumb-1920-976330.jpg",
        sp:2
    },
    {
        title: "wooder",
        img: src="img/slider4.jpg",
        sp:3
    },
  ];
dots=document.querySelectorAll('.dots ul li');
const sp=document.querySelector('.number') ;
const img=document.getElementById('slider-img');
const id=document.getElementById('titleId');
let cur=0;
let prev=document.querySelector('.--prev');
let next=document.querySelector('.--next');

window.addEventListener("DOMContentLoaded",function(){
    showSlider(cur);
})

function showSlider(slide){
    dots[cur].classList.add('--active')
    const item=sliders[slide];
    img.src=item.img;
    id.innerText=item.title;
    sp.innerText=item.sp.toString().padStart(2,'0');
}
next.addEventListener('click',function(){
    dots[cur].classList.remove('--active')
    cur++;
    if(cur>sliders.length-1){
        cur=0
    }
    showSlider(cur);
})
prev.addEventListener('click',function(){
    dots[cur].classList.remove('--active')
    cur--;
    if(cur<0){
        cur=sliders.length-1;
    }   
    showSlider(cur);
})
dots.forEach((e,i)=>{
    e.addEventListener('click',function(){
        dots[cur].classList.remove('--active');
        cur=i;
        dots[i].classList.add('--active');
        showSlider(i);
    })
})
$('.section-ac').on('click',function(){
    let panel=$(this).next();
    $('.panel.active').stop().slideUp().removeClass('active')
    panel.stop().toggleClass('active');
    panel.stop().slideToggle(300);
}) 
let $nav = $('.navigation li a');

function scrollNav(sel){
    let curTop = $(sel).position().top;
    let heightCur = $(sel).outerHeight();
    let scrollTop = $(window).scrollTop();
    if ( scrollTop + 100 > curTop && scrollTop + 100 < curTop + heightCur){
        $nav.filter("[data-section='"+sel+"']").addClass('active');
    } else{
        $nav.filter("[data-section='"+sel+"']").removeClass('active');
    }  
}
let arr=[];
for(let i = 0 ; i < $nav.length ; i++){
    let k=$nav[i].getAttribute("data-section");
    arr.push(k);
}
$(window).on('scroll', function(){
  
    for (let i = 0; i < arr.length; i++){
        scrollNav(arr[i]);
    }
})

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
