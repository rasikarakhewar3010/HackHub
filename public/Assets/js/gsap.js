gsap .from(".img img",{
    y:500,
    scale:0,
    duration:1.5,
    delay:1
})

gsap .from(".info h1",{
    x:-900,
    scale:0,
})

gsap .from(".info h3",{
    x:-900,
    scale:0,
    delay:0.6
})

gsap .from(".ex-info",{
    x:-900,
    scale:0,
    delay:1.2  
})

gsap .from(".explor",{
    x:-900,
    scale:0,
    delay:1.4
})

gsap.from(".img-2",{

    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:".img-2",
        scroller:"body",
        // markers:true,
        // scrub:2
    }
})

gsap.from(".af-img",{
    x:990,
    duration:1.2,
    scrollTrigger:{
        trigger:".img-2",
        scroller:"body",
        // markers:true,
        // scrub:true
    }
})

// gsap.from(".cards",{
//     // scale:0,
//     x:1200,
//     // rotate:720,
//     // opacity:0,
//     duration:1.2,
//     stagger: 0.3,
//     scrollTrigger:{
//         trigger:".cards",
//         scroller:"body",
//         start:"top 80%"
        
//         // scrub:1

//     }
// })

gsap.from(".faq",{
    scale:0,
    x:600,
    opacity:0,
    scrollTrigger:{
        trigger:".faq",
        scroller:"body",
        // scrub:1

    }
})

gsap.from(".guid-img",{
    scale:0,
    x:1600,
    duration:1,
    scrollTrigger:{
        trigger:".info-guid-head",
        scroller:"body"
    }
})

gsap.from(".info-guid-head",{
    scale:0,
    x:-1600,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".info-guid-head",
        scroller:"body"
    }
})

gsap.from(".footer div",{
    y:200,
    opacity:0.7,

    scrollTrigger:{
        trigger:".footer div",
        scroller:"body"
    }
})