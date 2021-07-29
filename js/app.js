import * as THREE from 'three';

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
    constructor(){ // funkcija koja kreira svojstva (properties) za svaki novi objekat
        this.container = document.querySelector('main');
        this.images = [...document.querySelectorAll('img')]; // koristim spread operator kako bih nodeList pretvorio i niz i tako lakse pristupio img elementima
        this.meshItems = []; // used to store all meshes we will be creating
        this.setupCamera();
        this.createMeshItems(); // pozivanje funkcija pri kreiranju novog objekta. Sve funkcije su deklarisanje ispod konstruktora u klasi.
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

        window.addEventListener('resize', this.onWindowResize.bind(this));

        this.scene = new THREE.Scene();

        // perspective camera
        let perspective = 1000;
        const fov = (180 * (2 * Math.atan()))
    }
}

init();
smoothScroll();