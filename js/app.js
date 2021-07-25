import * as THREE from 'three';

// const scene = new THREE.Scene();

const scrollable = document.querySelector('.scrollable');

let current = 0;
let target = 0;
let ease = 0.075; // procenat izmedju trenutne pozicije elementa scrollable i kolicine skrola na body elementu. Deo koji se dodaje na translateY svakih 16ms.

// Linear interpolation. Ovu funkciju koristimo kako bismo dobili procenat izmedju trenutne pozicije elementa (scrollY px) i kolicine scrollY pixela koji je skrolovan. taj deo (procenat) izmedju ove dve vrednosti se dodaje u translate na scollable element brzinom kojom se izvrsava requestAnimationFrame funkcija (16ms ili 60fps, razlicite informacije daje gugl).
function lerp(start, end, time){
    return ((end - start) * time) + start;
}

// body element mora biti iste visine (a najmanje 100 vh) kao element 'scrollable' da bi efekat scrolla bio potpun.
function init(){
    document.body.style.height = `${scrollable.getBoundingClientRect().height}px`;
}

function smoothScroll(){
    target = window.scrollY; // mesto do kod skrolujes body element
    current = lerp(current, target, ease); // pozicija do koje scrollable element dolazi nakon svakog proracuna requestAnimationFrame funkcije
    scrollable.style.transform = `translateY(${-current}px)`;
    requestAnimationFrame(smoothScroll); // funkcija koja obavlja proracune svakih 16ms.
}

class EffectCanvas{
    constructor(){
        this.container = document.querySelector('main');
        this.images = [...document.querySelectorAll('img')];
        this.meshItems = []; // used to store all meshes we will be creating
        this.setupCamera();
        this.createMeshItems();
        this.render();
    }

    get viewport(){
        let width = window.innerWidth;
        let height = window.innerHeight;
        let aspectRatio = width / height;
        
        return {
            width,
            height,
            aspectRatio
        }
    }

    setupCamera(){

        window.addEventListener('resize')
    }
}

init();
smoothScroll();