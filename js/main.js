console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

gsap.registerPlugin(DrawSVGPlugin, ScrambleTextPlugin);

const stage = select('.stage');
const circles = select('.circles__white');
const lCircs = select('.circles__white-l');
const rCircs = select('.circles__white-r');
const lCirc = select('.circles__single-l');
const rCirc = select('.circles__single-r');
const global = gsap.timeline();
const numCircles = 20; // number of bubbles per column.
const bubblesDur = 4; // duration for bubbles from bottom to top.
const minCircScale = 0.2; // minimum scale for random bubbles.  
const maxCircScale = 1; // maximum scale for random bubbles .
const circsTop = -900; // make a larger minimum value if maxCircScale is large to prevent cut off.
const goo = false; // set to true to make gooey bubbles!

function initCircles() {
    
    if(goo) {
        circles.setAttribute("filter", "url(#goo)");
    }
    
    for(let i = 0; i < numCircles-1; i++) {
        var cloneL = lCirc.cloneNode(true);
        var cloneR = rCirc.cloneNode(true);
        lCircs.appendChild(cloneL);
        rCircs.appendChild(cloneR);
    }
}

function twenty20() {
    
    let tl = gsap.timeline();
    
    tl.from('.twenty20 rect', {
        drawSVG: "0%",
        duration: 2,
        ease: 'power4.inOut'
    })
    .from('.twenty20 text', {
        scrambleText:{ 
            text: "0000", 
            chars: "23456789", 
            speed: 1
        },
        opacity: 0,
        duration: 2,
        ease: 'sine'
    }, 1.2)
    
    return tl;
}

function barcode() {
    let tl = gsap.timeline();
    
    tl.from('.barcode line', {
        scale: 0,
        duration: 2,
        transformOrigin: "top center",
        stagger: 0.1
    })
    
    return tl;
}

function borderTxt() {
    
    let tl = gsap.timeline();
    
    tl.from('.border-txt text', {
        opacity: 0,
        x: (i) => {
            if(i<3) {
                return "+=40";
            }
            return "-=40";
        },
		duration: 1.5,
		stagger: 0.1,
		scrambleText:{ text: "x", chars: "upperCase", speed: 1, delimiter:" ", tweenLength: false },
		ease: 'expo'
	})
    
    return tl;
    
}

function anniversary() {
    
    let tl = gsap.timeline();
    
    tl.from('.anniversary', {
        opacity: 0,
		duration: 4,
		ease: 'sine'
	})
    
    return tl;
  
}

function eleven() {
    let tl = gsap.timeline();
    
    tl.from('.bg-circs__stroke', {
        drawSVG: "0% 0%",
        ease: 'power4.inOut',
        duration: 4
    }, 0)
    .from('.bg-circs__fill', {
        scale: 0,
        // ease: 'elastic(0.4, 0.4)',
        ease: 'power4.inOut',
        duration: 2,
        transformOrigin: "center center"
    }, 0.5)
    .from('#clip-path rect', {
        scaleX: 0,
        ease: 'expo.inOut',
        transformOrigin: "left top",
        duration: 2
    }, 1)
    
    .set('.eleven-tops', {
        autoAlpha: 1
    }, 2)
    .from('.eleven-tops path', {
        scaleX: 0,
        ease: 'expo',
        duration: 2,
        transformOrigin: "93px top"
    }, 2)
    .set('.circles__red circle, .goo-base', {
        autoAlpha: 1
    }, 2.5)
    .from('.circles__red circle', {
        y: 200,
        duration: 10,
        ease: 'power4',
        stagger: 0.4
    }, 2.5)
    
    return tl;
}

function bubbles() {
    
    let tl = gsap.timeline();
    
    tl.fromTo('.circles__white-l circle', {
        x: 'random(0, 200)',
        y: 50,
        opacity: 1,
        scale: `random(${minCircScale}, ${maxCircScale}, 0.5)`
    }, {
        x: () => {
            let newX = gsap.utils.random(-75, 75);
            if(newX < 0) {
                return `-=${newX*-1}`;
            }
            return `+=${newX}`;
        },
        y: circsTop,
        duration: bubblesDur,
        ease: "sine.in",
        stagger: {
            each: bubblesDur/numCircles,
            repeat: -1,
            repeatRefresh: true
        }
    })
    .fromTo('.circles__white-r circle', {
        x: ('random(0, 200)'),
        y: 100,
        opacity: 1,
        scale: `random(${minCircScale}, ${maxCircScale}, 0.5)`
    }, {
        x: () => {
            let newX = gsap.utils.random(-75, 75);
            if(newX < 0) {
                return `-=${newX*-1}`;
            }
            return `+=${newX}`;
        },
        y: circsTop,
        duration: bubblesDur,
        ease: "sine.in",
        stagger: {
            each: bubblesDur/numCircles,
            repeat: -1,
            repeatRefresh: true
        }
    }, 0)
    
    return tl;
}

function afkPaths1() {
    let tl = gsap.timeline({
        defaults: {
            ease: 'power4.in'
        }
    });
    
    tl.from('.afk-1 .a__right',{
        drawSVG: "100% 100%",
        duration: 1.5
    })
    .from('.afk-1 .a__left',{
        drawSVG: "100% 100%",
        duration: 1.5
    }, 0.2)
    .from('.afk-1 .f__top',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.4)
    .from('.afk-1 .f__btm',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.6)
    .from('.afk-1 .k__left',{
        drawSVG: "0% 0%",
        duration: 1.0
    }, 0.5)
    .from('.afk-1 .k__right',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.55)
    
    return tl;
}

function afkPaths2() {
    let tl = gsap.timeline({
        defaults: {
            ease: 'power4.in'
        }
    });
    
    tl.from('.afk-2 .a__right',{
        drawSVG: "100% 100%",
        duration: 1.5
    })
    .from('.afk-2 .a__left',{
        drawSVG: "100% 100%",
        duration: 1.5
    }, 0.2)
    .from('.afk-2 .f__top',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.4)
    .from('.afk-2 .f__btm',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.6)
    .from('.afk-2 .k__left',{
        drawSVG: "0% 0%",
        duration: 1.0
    }, 0.5)
    .from('.afk-2 .k__right',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.55)
    
    
    return tl;
}

function afkPaths3() {
    let tl = gsap.timeline({
        defaults: {
            ease: 'expo'
        }
    });
    
    tl.from('.afk-3 .a__right',{
        drawSVG: "100% 100%",
        duration: 1.4
    })
    .from('.afk-3 .a__left',{
        drawSVG: "100% 100%",
        duration: 1.4
    }, 0.2)
    .from('.afk-3 .f__top',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.3)
    .from('.afk-3 .f__btm',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.3)
    .from('.afk-3 .k__left',{
        drawSVG: "0% 0%",
        duration: 1.0
    }, 0.4)
    .from('.afk-3 .k__right',{
        drawSVG: "100% 100%",
        duration: 1.0
    }, 0.45)
    
    
    return tl;
}

function init() {
    resize();
    initCircles();
    gsap.set(stage, { autoAlpha: 1 });
    global.add(eleven())
        .add(bubbles(), 3)
        .add(borderTxt(), 2)
        .add(barcode(), 1)
        .add(anniversary(), 3)
        .add(twenty20(), 1)
        .add(afkPaths1(), 2)
        .add(afkPaths2(), 2.35)
        .add(afkPaths3(), 3.65)
    
    stage.onclick = () => {
        global.restart();
    }
}

function resize() {
	let vh = window.innerHeight;
	let sh = stage.offsetHeight;
	let scaleFactor = vh/sh;
	if(scaleFactor<1) {
		gsap.set(stage, { scale: scaleFactor });
	}
	else {
        gsap.set(stage, { scale: 1 });
    }
}

window.onload = () => {
    window.onresize = resize;
	init();
    // GSDevTools.create();
};