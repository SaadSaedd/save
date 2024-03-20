// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
let currentImg = 0; // index of the first image 
const interval = 3; // duration(speed) of the slide

let timer = setInterval(changeSlide, interval);

currentImg = (currentImg + 1) % imgs.length; // update the index number

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}

function changeSlide(n) {
  for (let i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = n;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}


const words = "NXT MUSEUM";

const ANIMATION_DUATION = 4000;

const characters = words.split("").forEach((char, i) => {
    function createElement(offset){
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DUATION  / 16) - offset}ms`;

        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document
    .getElementById("spiral2")
    .append(createElement(-1 * (ANIMATION_DUATION / 2)));
})
