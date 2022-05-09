import { KlavaClass, KlavaKey, KlavaPar, keyboardParam } from './BazaZn'

function createP(str, container, classed) {
    const paragraf = document.createElement('p');
    paragraf.innerText = str;
    paragraf.className = classed;
    container.appendChild(paragraf);
};
function createDiv(container, classed) {
    const tegDiv = document.createElement('div');
    tegDiv.className = classed;
    container.appendChild(tegDiv);
};
function createTextArea(container) {
    const TextArea = document.createElement('textarea');
    TextArea.classList = "body-text";
    TextArea.classList = "textarea";
    TextArea.id = "textarea";
    TextArea.rows = "5";
    TextArea.cols = "50";
    container.appendChild(TextArea);
}
function generatePage() {
    const baza = document.body.appendChild(document.createElement('div'));
    baza.className = "baza";
    createP('RSS VIRTUAL-KEYBOARD', baza, "title");
    createTextArea(baza);
    createDiv(baza, "keyboard");
    const keyboard = document.querySelector('.keyboard');
    for (let i = 0; i < KlavaClass.length; i++) {
        const row = keyboard.appendChild(document.createElement('div'));
        row.className = `row`;
        for (let j = 0; j < KlavaClass[i].length; j++) {
            const keyKup = row.appendChild(document.createElement('div'));
            keyKup.classList.add("key");
            keyKup.classList.add(KlavaClass[i][j]);
            keyKup.dataset.code = KlavaClass[i][j];
            let keyInObj = KlavaPar[KlavaClass[i][j]];
            let EnInKey = keyInObj['en'];
            let RuInKey = keyInObj['ru'];
            const span1 = keyKup.appendChild(document.createElement('span'));
            span1.classList.add("en");
            span1.classList.add(keyboardParam.language === 'ENG' ? "a" : 'hidden');
            let caseDown = span1.appendChild(document.createElement('span'));
            caseDown.classList.add('letter');
            caseDown.classList.add("caseDown");
            caseDown.innerText = EnInKey["caseDown"];
            let caseUp = span1.appendChild(document.createElement('span'));
            caseUp.classList.add('letter');
            caseUp.classList.add("caseUp");
            caseUp.innerText = EnInKey["caseUp"];
            caseUp.classList.add('hidden');
            let caps = span1.appendChild(document.createElement('span'));
            caps.classList.add('letter');
            caps.classList.add("caps");
            caps.innerText = EnInKey["caps"];
            caps.classList.add('hidden');
            let capsUp = span1.appendChild(document.createElement('span'));
            capsUp.classList.add('letter');
            capsUp.classList.add("capsUp");
            capsUp.innerText = EnInKey["capsUp"];
            capsUp.classList.add('hidden');
            const span2 = keyKup.appendChild(document.createElement('span'));
            span2.classList.add("ru");
            span2.classList.add(keyboardParam.language === 'ENG' ? 'hidden' : "a");
            caseDown = span2.appendChild(document.createElement('span'));
            caseDown.classList.add('letter');
            caseDown.classList.add("caseDown");
            caseDown.innerText = RuInKey["caseDown"];
            caseUp = span2.appendChild(document.createElement('span'));
            caseUp.classList.add('letter');
            caseUp.classList.add("caseUp");
            caseUp.innerText = RuInKey["caseUp"];
            caseUp.classList.add('hidden')
            caps = span2.appendChild(document.createElement('span'));
            caps.classList.add('letter');
            caps.classList.add("caps");
            caps.innerText = RuInKey["caps"];
            caps.classList.add('hidden');
            capsUp = span2.appendChild(document.createElement('span'));
            capsUp.classList.add('letter');
            capsUp.classList.add("capsUp");
            capsUp.innerText = RuInKey["capsUp"];
            capsUp.classList.add('hidden');
        }
    }
    createP('system Windosw', baza, "title");
    createP('change lenguge ctrl + Alt', baza, 'title');
}
class Counter {
    constructor(baza = 0) {
        this.count = baza;
    }
    increment() {
        this.count += 1;
    }
    getCount() {
        return this.count;
    }
}

const counter = new Counter(0);

function AddAnimClass(elem) {
    elem.classList.add('onclick');
    elem.style.borderRadius = '10px';
    elem.style.backgroundColor = "#000"
}
function RemoveAnimClass(elem) {
    elem.classList.remove('onclick');
    elem.style.borderRadius = '3px';
    elem.style.backgroundColor = "#444444"
}
// f change language
function ctrlAlt() {
    const LAN = keyboardParam.language;
    const KEYS = document.querySelectorAll('.key');
    if (LAN === 'ENG') {
        KEYS.forEach((key) => {
            const spanEn = key.querySelector('.en');
            const spanRu = key.querySelector('.ru');
            spanEn.classList.add('hidden');
            spanRu.classList.remove('hidden');
        });
        keyboardParam.language = 'RUS';
        localStorage.setItem('language', keyboardParam.language);
    } else {
        KEYS.forEach((key) => {
            const spanEn = key.querySelector('.en');
            const spanRu = key.querySelector('.ru');
            spanRu.classList.add('hidden');
            spanEn.classList.remove('hidden');
        });
        keyboardParam.language = 'ENG';
        localStorage.setItem('language', keyboardParam.language);
    }
}
function changeClass(param) {
    const allButton = document.querySelectorAll('.letter');
    const elemWithoutHidden = Array.from(allButton).filter((but) => !but.classList.contains('hidden'));
    elemWithoutHidden.forEach((but) => {
        but.classList.add('hidden');
    });
    const change = document.querySelectorAll(param);
    change.forEach((but) => {
        but.classList.remove('hidden');
    });
}
function coordinatesCursor() {
    const textArea = document.querySelector('textarea');
    textArea.selectionStart = keyboardParam.cursorPosition;
    textArea.selectionEnd = keyboardParam.cursorPosition;
}
function countletterInString() {
    const textArea = document.querySelector('textarea');
    const split = (textArea.value).split('\n').map((line) => {
        if (line.length > 79) {
            let { length } = line;
            const countStr = [];
            while (length > 79) {
                countStr.push(79);
                length -= 79;
            }
            if (length > 0) {
                countStr.push(length);
            }
            return countStr;
        }
        return line.length;
    });
    const result = split.flat();
    keyboardParam.letterInString = result;
}
function getIndexInString() {
    let countIndex = 0;
    let countS = keyboardParam.cursorPosition;
    if (keyboardParam.letterInString.length === 1) {
        keyboardParam.currentPositionInString = countS;
    } else {
        for (let i = 0; i < keyboardParam.letterInString.length; i++) {
            if (countS <= keyboardParam.letterInString[i]) {
                keyboardParam.indexInString = countIndex;
                break;
            }
            countS -= keyboardParam.letterInString[i];
            countIndex += 1;
            countS -= 1;
        }
        keyboardParam.currentPositionInString = countS;
    }
}

function pushText(dataCode) {
    const textArea = document.querySelector('textarea');
    if (KlavaKey.includes(dataCode)) {
        textArea.blur();
        textArea.focus();
        coordinatesCursor();
        switch (dataCode) {
            case 'ShiftLeft':
                break;
            case 'ShiftRight':
                break;
            case 'ControlRight':
                break;
            case 'ControlLeft':
                break;
            case 'MetaLeft':
                break;
            case 'AltLeft':
                break;
            case 'AltRight':
                break;
            case 'CapsLock':
                break;
            case 'Backspace':
                if (keyboardParam.cursorPosition > 0) {
                    textArea.value = (textArea.value).split('').filter((char, index) => index !== keyboardParam.cursorPosition - 1).join('');
                    keyboardParam.cursorPosition -= 1;
                    coordinatesCursor();
                }
                break;
            case 'Delete': {
                textArea.value = (textArea.value).split('').filter((char, index) => index !== keyboardParam.cursorPosition).join('');
                coordinatesCursor();
                break;
            }
            case 'Tab':
                textArea.value = `${textArea.value.slice(0, keyboardParam.cursorPosition)}    ${textArea.value.slice(keyboardParam.cursorPosition)}`;
                keyboardParam.cursorPosition += 4;
                coordinatesCursor();
                break;
            case 'Enter':
                textArea.value = `${textArea.value.slice(0, keyboardParam.cursorPosition)}\n${textArea.value.slice(keyboardParam.cursorPosition)}`;
                keyboardParam.cursorPosition += 1;
                coordinatesCursor();
                break;
            case 'Space':
                textArea.value = `${textArea.value.slice(0, keyboardParam.cursorPosition)} ${textArea.value.slice(keyboardParam.cursorPosition)}`;
                keyboardParam.cursorPosition += 1;
                coordinatesCursor();
                break;
            case 'ArrowLeft':
                if (keyboardParam.cursorPosition > 0) {
                    keyboardParam.cursorPosition -= 1;
                    coordinatesCursor();
                }
                break;
            case 'ArrowRight':
                if (keyboardParam.cursorPosition < textArea.value.length) {
                    keyboardParam.cursorPosition += 1;
                    coordinatesCursor();
                }
                break;
            case 'ArrowUp':
                countletterInString();
                getIndexInString();
                if (keyboardParam.letterInString[keyboardParam.indexInString - 1] !== undefined) {
                    const countLetterLeft = keyboardParam.currentPositionInString;
                    const needRight = keyboardParam.letterInString[keyboardParam.indexInString - 1]
                        - countLetterLeft + 1;
                    if (keyboardParam.letterInString[keyboardParam.indexInString - 1] >= countLetterLeft) {
                        keyboardParam.cursorPosition -= (needRight + countLetterLeft);
                        coordinatesCursor();
                    } else {
                        keyboardParam.cursorPosition -= countLetterLeft + 1;
                        coordinatesCursor();
                    }
                } else {
                    keyboardParam.cursorPosition = 0;
                    coordinatesCursor();
                }
                break;
            case 'ArrowDown':
                countletterInString();
                getIndexInString();
                if (keyboardParam.letterInString[keyboardParam.indexInString + 1] !== undefined) {
                    const countLetterRight = keyboardParam.letterInString[keyboardParam.indexInString]
                        - keyboardParam.currentPositionInString;
                    const needLeft = keyboardParam.letterInString[keyboardParam.indexInString]
                        - countLetterRight + 1;
                    if (keyboardParam.letterInString[keyboardParam.indexInString + 1] >= needLeft) {
                        keyboardParam.cursorPosition += needLeft + countLetterRight;
                        coordinatesCursor();
                    } else {
                        keyboardParam.cursorPosition += keyboardParam.letterInString[keyboardParam.indexInString
                            + 1] + countLetterRight + 1;
                        coordinatesCursor();
                    }
                } else {
                    keyboardParam.cursorPosition = textArea.value.length;
                    coordinatesCursor();
                }
                break;
            default:
                textArea.value = `${textArea.value.slice(0, keyboardParam.cursorPosition)}${document.querySelector(`.${dataCode}`).innerText}${textArea.value.slice(keyboardParam.cursorPosition)}`;
                keyboardParam.cursorPosition += 1;
                textArea.selectionStart = keyboardParam.cursorPosition;
                textArea.selectionEnd = keyboardParam.cursorPosition;
                if (textArea.value.length % 78 === 0) {
                    textArea.value = `${textArea.value.slice(0, keyboardParam.cursorPosition)}\n${textArea.value.slice(keyboardParam.cursorPosition)}`;
                    keyboardParam.cursorPosition += 1;
                    textArea.selectionStart = keyboardParam.cursorPosition;
                    textArea.selectionEnd = keyboardParam.cursorPosition;
                }
        }
        countletterInString();
        getIndexInString();
        counter.increment();
    }
}


function Nazhatie(event) {
    event.preventDefault();
    const { repeat } = event;
    if (event.code == 'AltLeft' && (event.ctrlKey === true || event.metaKey === true)) {
        ctrlAlt();
    }
    if (event.code === 'CapsLock') {
        if (!repeat) {
            if (keyboardParam.capsLock === false) {
                changeClass('.caps');
                AddAnimClass(document.querySelector(`.CapsLock`));
                keyboardParam.capsLock = true;
            } else {
                changeClass('.caseDown');
                RemoveAnimClass(document.querySelector(`.CapsLock`));
                keyboardParam.capsLock = false;
            }
        }
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (!repeat) {
            if (keyboardParam.capsLock === false) {
                changeClass('.caseUp');
                keyboardParam.shift = true;
            } else {
                changeClass('.capsUp');
                keyboardParam.shift = true;
            }
        }
        let anime = document.querySelector(`.${event.code}`);
        anime.classList.add('onclick');
    }
    if (event.code !== 'CapsLock' && KlavaKey.includes(event.code)) {
        pushText(event.code);
        if (!repeat) {
            AddAnimClass(document.querySelector(`.${event.code}`));
        }
    }
}
function Podniatie(event) {
    event.preventDefault();
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (keyboardParam.capsLock === false) {
            changeClass('.caseDown');
            keyboardParam.shift = false;
        } else {
            changeClass('.caps');
            keyboardParam.shift = false;
        }
        let anime = document.querySelector(`.${event.code}`);
        anime.classList.remove("active")
    }
    if (event.code !== 'CapsLock' && KlavaKey.includes(event.code)) {
        RemoveAnimClass(document.querySelector(`.${event.code}`));
    }
}
function onMouseClick(event) {
    if (event.target.closest('.key')) {
        const dataCode = event.target.closest('.key').dataset.code;
        pushText(dataCode);
        if (dataCode === 'CapsLock') {
            if (keyboardParam.capsLock === false) {
                changeClass('.caps');
                AddAnimClass(event.target.closest('.key'));
                keyboardParam.capsLock = true;
            } else {
                changeClass('.caseDown');
                RemoveAnimClass(event.target.closest('.key'));
                keyboardParam.capsLock = false;
            }
        } else if (dataCode === 'ShiftLeft' || dataCode === 'ShiftRight') {
            AddAnimClass(event.target.closest('.key'));
            if (keyboardParam.capsLock === false) {
                changeClass('.caseUp');
                keyboardParam.shift = true;
            } else {
                changeClass('.capsUp');
                keyboardParam.shift = true;
            }
        } else {
            keyboardParam.selectMouse = event.target.closest('.key');
            AddAnimationClass(event.target.closest('.key'));
        }
    }
}
function upMouseClick(event) {
    if (event.target.closest('.key')) {
        if (event.target.closest('.key').dataset.code === 'ShiftLeft' || event.target.closest('.key').dataset.code === 'ShiftRight') {
            RemoveAnimClass(event.target.closest('.key'));
            if (keyboardParam.capsLock === false) {
                changeClass('.caseDown');
                keyboardParam.shift = false;
            } else {
                changeClass('.caps');
                keyboardParam.shift = false;
            }
        }
    }
    if (keyboardParam.selectMouse) {
        if (keyboardParam.selectMouse.dataset.code === 'ShiftLeft' || keyboardParam.selectMouse.dataset.code === 'ShiftRight') {
            if (keyboardParam.capsLock === false) {
                changeClass('.caseDown');
                keyboardParam.shift = false;
            } else {
                changeClass('.caps');
                keyboardParam.shift = false;
            }
        }
        keyboardParam.selectMouse = null;
    }
    keyboardParam.selectMouse = event.target.closest('.key');
    RemoveAnimClass(event.target.closest('.key'));
}

function onClick(event) {
    if (event.target.closest('.key')) {
        document.querySelector('textarea').focus();
    }
}
export {
    generatePage,
    Nazhatie,
    Podniatie,
    onMouseClick,
    upMouseClick,
    onClick
};