function hamburger(){

var tl = gsap.timeline();

tl.to(".hamberger", {
    x: 0
})

tl.from(".hamberger-lists div", {
    x: "-400",
    opacity: 0,
    stagger: ".2",
    duration: 1.5,
})

tl.pause()

var menu = document.querySelector(".menu")
var close = document.querySelector(".close")

menu.addEventListener("click", function () {
    tl.play()
})


close.addEventListener("click", function () {
    tl.reverse()
})

}

hamburger()

function otherAnimation(){
    gsap.from(".dis",{
        y:80,
        opacity:0,
        stagger:.4,
        duration:1,
    
    })
    
    gsap.from(".photo",{
        y:80,
        opacity:0,
        stagger:.4,
        duration:1,
        scrollTrigger:{
            trigger:"body",
            // markers:true,
            start:"51%",
            
        }
    
    })
    
    gsap.from(".n",{
        y:"-50",
        duration:1,
        stagger:.5,
        opacity:0
    })
}
otherAnimation()


// var cursor = document.querySelector("#main");

// cursor.addEventListener("mousemove", function(e){
//     console.log(e.screenX)
//     gsap.to(".pointer",{
//         x: e.screenX,
//         y: e.screenY,
//     })
// })
