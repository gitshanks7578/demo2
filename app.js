let cursor = document.querySelector("#cursor");
let cursor2 = document.querySelector("#cursor-blur");
let cursor_affected = document.querySelector(".cursor_affected");

let menu = document.querySelector("#menu");
let close = document.querySelector("#close");
let sidebar =document.querySelector(".sidebar");

// var tl = gsap.timeline()
menu.addEventListener("click",()=>{
    sidebar.classList.remove("hide");
    menu.classList.add("hide");
    gsap.to(sidebar,{
        right:"0%",
        duration:0.5,
        opacity:1
    })
});
close.addEventListener("click",()=>{
    gsap.to(sidebar,{
        right:"-100%",
        duration:0.4
    })
    menu.classList.remove("hide");
    // sidebar.classList.add("hide");
    
});


document.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"power3.out"
        // ease:"back.out"
    });

    // to center the bigger circle we reduced its radius 150
    gsap.to(cursor2,{
        x:dets.x - 175,
        y:dets.y -175,
        duration:0.8,
        ease:"power3.out"
        // ease:"back.out"
    });
});


gsap.to("nav",{
    backgroundColor:"black",
   height:"100px",
    scrollTrigger : {
        trigger : "nav",
        scroller : "body",
        markers : true,
        start : "top -10%",
        end:"top -11%",
        scrub :1
    }
});
gsap.to("#main",{
    backgroundColor : "black",
    
    scrollTrigger : {
        trigger: "#main",
        scroll : "body",
        start : "top -25%",
        end: "top -70%",
        scrub:2
    }
});




// tilt 
$(document).ready(
    $(".cards").tilt(),
    $(".cards_sec").tilt(),
    $("#page3 .quote p").tilt(),
    // $(".gcard").tilt()

)


gsap.from(".about_us img,.about_text",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger :{
        trigger:".about_us",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 80%",
        // markers:true
    }
});


gsap.from(".cards",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.2,
    scrollTrigger :{
        trigger:".cards_sec",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 80%",
        // markers:true,
    }
});

gsap.from("#colon1",{
    x:-10,
    y:-10,
    // opacity:0,
    duration:3,
    stagger:0.2,
    scrollTrigger:{
        scroll:"body",
        trigger:".quote",
        scrub:2,
        // markers:true,
        start:"top 80%",
        end:"top 70%"
    }
})
gsap.from("#colon2",{
    x:10,
    y:10,
    // opacity:0,
    duration:3,
    stagger:0.2,
    scrollTrigger:{
        scroll:"body",
        trigger:".quote",
        scrub:2,
        // markers:true,
        start:"top 80%",
        end:"top 70%"
    }
})



// swiper js 
document.addEventListener('DOMContentLoaded',()=>{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
     
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
});
