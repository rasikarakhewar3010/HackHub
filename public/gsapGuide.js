gsap.from(".heading h1", {
    x: -500,
    opacity: 0,
    duration: 1.5,
});

gsap.from(".heading-continue", {
    x: 500,
    opacity: 0,
    duration: 2,
    delay: 1,
});

gsap.from("#img1", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

gsap.from("#img2", {
    x: 100,
    opacity: 0,
    duration: 1.8,
    delay: 1.3,
});

gsap.from(".mini-box", {
    y: 990,
    duration: 1,
    stagger: 1.5,
    scrollTrigger: {
        trigger: ".img-2",
        scroller: "body",
        // Uncomment these if needed:
        // markers: true,
        // scrub: true,
    },
});

var tl = gsap.timeline({scrollTrigger: {duration:1,delay:1,}});

tl.from(".cont-real-info p", {
    y: -100,
    duration: 0.9,
    delay:0.5,
    stagger: 0.3,
    opacity: 0,
});


tl.from(".for-type", {
    y: 300,
});

tl.from(".for-type .type-of-hack", {
    y: -50,
    // duration:0.8 ,
    stagger: 0.3,
    // delay:0.3,
    opacity: 0,
    markers: true,
});


tl.from(".ans-why .ans", {
    x: -500,
    duration:1.5 ,
    stagger: 0.8,
    delay:0.3,
    opacity: 0,
});

// for footer 
gsap.from(".footer div",{
    y:200,
    opacity:0.7,

    scrollTrigger:{
        trigger:".footer div",
        scroller:"body"
    }
});