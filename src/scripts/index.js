import { generatePage, Nazhatie, Podniatie, onMouseClick, upMouseClick, onClick } from "./view";
import { keyboardParam } from "./BazaZn";

import "../assets/style/main.css";
import "../assets/style/normalize.css";

document.addEventListener("keydown", (event) => Nazhatie(event));
document.addEventListener("keyup", (event) => Podniatie(event));
document.addEventListener("mousedown", (event) => onMouseClick(event));
document.addEventListener("mouseup", (event) => upMouseClick(event));
document.addEventListener("mouseup", (event) => onClick(event));
window.onload = () => {
    generatePage();
    document.querySelector("textarea").addEventListener("click", (event) => {
        keyboardParam.cursorPosition = event.target.selectionStart;
    });
};