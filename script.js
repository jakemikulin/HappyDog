// JavaScript file for Good Boy
// Author: Jake Mikulin

let goodboybutton = document.querySelector('#goodboybutton');
let repeatbutton = document.querySelector('#repeatbutton');

let dogbox = document.querySelector('#dogbox');

goodboybutton.addEventListener('click', () => {
    document.getElementById("dogbox").style.backgroundImage = "url('images/after-good-boy.jpg')";
});

repeatbutton.addEventListener('click', () => {
    document.getElementById("dogbox").style.backgroundImage = "url('images/before-good-boy.jpg')";
});

dogbox.addEventListener('mouseover', () => {
    document.getElementById("dogbox").style.backgroundImage = "url('images/after-good-boy.jpg')";
});

dogbox.addEventListener('mouseleave', () => {
    document.getElementById("dogbox").style.backgroundImage = "url('images/before-good-boy.jpg')";
});