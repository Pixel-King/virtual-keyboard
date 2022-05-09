import { generatePage , onKeyDown , onKeyUp , onMouseDown , onMouseUp , onClick } from "./view"
import {keyboardParam} from './BazaZn'

import "../assets/style/main.css";
import "../assets/style/normalize.css"
  
document.addEventListener('keydown', (event) => onKeyDown(event));
document.addEventListener('keyup', (event) => onKeyUp(event));
document.addEventListener('mousedown', (event) => onMouseDown(event));
document.addEventListener('mouseup', (event) => onMouseUp(event));
document.addEventListener('mouseup', (event) => onClick(event));
window.onload = () => {
    generatePage();
    document.querySelector('textarea').addEventListener('click', (event) => {
      keyboardParam.cursorPosition = event.target.selectionStart;
    });
};