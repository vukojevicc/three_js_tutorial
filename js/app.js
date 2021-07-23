const scrollable = document.querySelector('.scrollable');

let current = 0;
let target = 0;
let ease = 0.075;

// Linear interpolation used for smooth scrolling and image offset uniformt adjustment
function lerp(start, end, time){
    return ((end - start) * time) + start;
}

function init(){
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

function smoothScroll(){
    target = window.scrollY;
    current = lerp(current, target, ease);
    scrollable.style.transform = `translateY(${-current}px)`;
    requestAnimationFrame(smoothScroll);
}

init();
smoothScroll();