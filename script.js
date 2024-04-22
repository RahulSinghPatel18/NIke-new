
var tl = gsap.timeline({});

tl.from("#main #nav h3, #nav img,#part3 #hc  ",{
    delay:0.3,
    duration:0.4,
    y:-200,
    stagger:0.6,
    opacity:0,
})

tl.from(" #p1-left h1",{
    duration:1,
    x:-100,
    stagger:1,
    
})
tl.from(" #p1-left h2",{
    duration:1,
    x:100,
    stagger:1,
})
tl.from(" #p1-left button",{
    duration:1,
    stagger:1,
    scale:0.5,
    backgroundColor:"black",
    color:"white",
    rotate:360,
    yoyo:true,
//    repeat:-1,
    
})
tl.from(" #page1 img",{
    duration:1,
    stagger:1,
    rotate:40,
    stagger:1,
    // repeat:-1,
})

