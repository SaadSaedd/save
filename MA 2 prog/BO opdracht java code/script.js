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