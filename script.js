// gsap.from("box",{
//     x:500,
//     duration:5,
// })
// //to - iniital to final
// //from- final to initial 
// //fromTo
// //set

 var anim = gsap.timeline();
 anim.from("nav",{
    y:-300,
     opacity:0,
    duration:1,
 }) 
 anim.from(".lft h1",{
    y:-100,
    opacity:0,
    duration:1,
 },'a') 
 anim.from(".lft p",{
    y:-100,
    opacity:0,
    duration:0.5,
 }) 
 anim.from(".btn",{
    y:-100,
    opacity:0,
    duration:0.5,
 }) 
 anim.from("video",{
    y:-100,
    opacity:0,
    duration:0.5,
 },'a') 
 ///If u using some id u can use # to access and same for  class as .
