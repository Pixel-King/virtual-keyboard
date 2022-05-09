const KlavaClass = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];
const KlavaKey = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];
const KlavaPar = {
    "Backquote": {
        "en": {
            "caseDown": "`",
            "caseUp": "~",
            "caps": "`",
            "capsUp": "~"
        },
        "ru": {
            "caseDown": "ё",
            "caseUp": "Ё",
            "caps": "Ё",
            "capsUp": "Ё"
        }
    },
    "Digit1": {
        "en": {
            "caseDown": "1",
            "caseUp": "!",
            "caps": "1",
            "capsUp": "!"
        },
        "ru": {
            "caseDown": "1",
            "caseUp": "!",
            "caps": "1",
            "capsUp": "!"
        }
    },
    "Digit2": {
        "en": {
            "caseDown": "2",
            "caseUp": "@",
            "caps": "2",
            "capsUp": "@"
        },
        "ru": {
            "caseDown": "2",
            "caseUp": "@",
            "caps": "2",
            "capsUp": "@"
        }
    },
    "Digit3": {
        "en": {
            "caseDown": "3",
            "caseUp": "#",
            "caps": "3",
            "capsUp": "#"
        },
        "ru": {
            "caseDown": "3",
            "caseUp": "#",
            "caps": "3",
            "capsUp": "#"
        }
    },
    "Digit4": {
        "en": {
            "caseDown": "4",
            "caseUp": "$",
            "caps": "4",
            "capsUp": "$"
        },
        "ru": {
            "caseDown": "4",
            "caseUp": ";",
            "caps": "4",
            "capsUp": ";"
        }
    },
    "Digit5": {
        "en": {
            "caseDown": "5",
            "caseUp": "%",
            "caps": "5",
            "capsUp": "%"
        },
        "ru": {
            "caseDown": "5",
            "caseUp": "%",
            "caps": "5",
            "capsUp": "%"
        }
    },
    "Digit6": {
        "en": {
            "caseDown": "6",
            "caseUp": "^",
            "caps": "6",
            "capsUp": "^"
        },
        "ru": {
            "caseDown": "6",
            "caseUp": ":",
            "caps": "6",
            "capsUp": ":"
        }
    },
    "Digit7": {
        "en": {
            "caseDown": "7",
            "caseUp": "&",
            "caps": "7",
            "capsUp": "&"
        },
        "ru": {
            "caseDown": "7",
            "caseUp": "?",
            "caps": "7",
            "capsUp": "?"
        }
    },
    "Digit8": {
        "en": {
            "caseDown": "8",
            "caseUp": "*",
            "caps": "8",
            "capsUp": "*"
        },
        "ru": {
            "caseDown": "8",
            "caseUp": "*",
            "caps": "8",
            "capsUp": "*"
        }
    },
    "Digit9": {
        "en": {
            "caseDown": "9",
            "caseUp": "(",
            "caps": "9",
            "capsUp": "("
        },
        "ru": {
            "caseDown": "9",
            "caseUp": "(",
            "caps": "9",
            "capsUp": "("
        }
    },
    "Digit0": {
        "en": {
            "caseDown": "0",
            "caseUp": ")",
            "caps": "0",
            "capsUp": ")"
        },
        "ru": {
            "caseDown": "0",
            "caseUp": ")",
            "caps": "0",
            "capsUp": ")"
        }
    },
    "Minus": {
        "en": {
            "caseDown": "-",
            "caseUp": "_",
            "caps": "-",
            "capsUp": "_"
        },
        "ru": {
            "caseDown": "-",
            "caseUp": "_",
            "caps": "-",
            "capsUp": "_"
        }
    },
    "Equal": {
        "en": {
            "caseDown": "=",
            "caseUp": "+",
            "caps": "=",
            "capsUp": "+"
        },
        "ru": {
            "caseDown": "=",
            "caseUp": "+",
            "caps": "=",
            "capsUp": "+"
        }
    },
    "Backspace": {
        "en": {
            "caseDown": "Backspace",
            "caseUp": "Backspace",
            "caps": "Backspace",
            "capsUp": "Backspace"
        },
        "ru": {
            "caseDown": "Backspace",
            "caseUp": "Backspace",
            "caps": "Backspace",
            "capsUp": "Backspace"
        }
    },
    "Tab": {
        "en": {
            "caseDown": "Tab",
            "caseUp": "Tab",
            "caps": "Tab",
            "capsUp": "Tab"
        },
        "ru": {
            "caseDown": "Tab",
            "caseUp": "Tab",
            "caps": "Tab",
            "capsUp": "Tab"
        }
    },
    "KeyQ": {
        "en": {
            "caseDown": "q",
            "caseUp": "Q",
            "caps": "Q",
            "capsUp": "Q"
        },
        "ru": {
            "caseDown": "й",
            "caseUp": "Й",
            "caps": "Й",
            "capsUp": "Й"
        }
    },
    "KeyW": {
        "en": {
            "caseDown": "w",
            "caseUp": "W",
            "caps": "W",
            "capsUp": "W"
        },
        "ru": {
            "caseDown": "ц",
            "caseUp": "Ц",
            "caps": "Ц",
            "capsUp": "Ц"
        }
    },
    "KeyE": {
        "en": {
            "caseDown": "e",
            "caseUp": "E",
            "caps": "E",
            "capsUp": "E"
        },
        "ru": {
            "caseDown": "у",
            "caseUp": "У",
            "caps": "У",
            "capsUp": "У"
        }
    },
    "KeyR": {
        "en": {
            "caseDown": "r",
            "caseUp": "R",
            "caps": "R",
            "capsUp": "R"
        },
        "ru": {
            "caseDown": "к",
            "caseUp": "К",
            "caps": "К",
            "capsUp": "K"
        }
    },
    "KeyT": {
        "en": {
            "caseDown": "t",
            "caseUp": "T",
            "caps": "T",
            "capsUp": "T"
        },
        "ru": {
            "caseDown": "е",
            "caseUp": "Е",
            "caps": "Е",
            "capsUp": "E"
        }
    },
    "KeyY": {
        "en": {
            "caseDown": "y",
            "caseUp": "Y",
            "caps": "Y",
            "capsUp": "Y"
        },
        "ru": {
            "caseDown": "н",
            "caseUp": "Н",
            "caps": "Н",
            "capsUp": "H"
        }
    },
    "KeyU": {
        "en": {
            "caseDown": "u",
            "caseUp": "U",
            "caps": "U",
            "capsUp": "U"
        },
        "ru": {
            "caseDown": "г",
            "caseUp": "Г",
            "caps": "Г",
            "capsUp": "Г"
        }
    },
    "KeyI": {
        "en": {
            "caseDown": "i",
            "caseUp": "I",
            "caps": "I",
            "capsUp": "I"
        },
        "ru": {
            "caseDown": "ш",
            "caseUp": "Ш",
            "caps": "Ш",
            "capsUp": "Ш"
        }
    },
    "KeyO": {
        "en": {
            "caseDown": "o",
            "caseUp": "O",
            "caps": "O",
            "capsUp": "O"
        },
        "ru": {
            "caseDown": "щ",
            "caseUp": "Щ",
            "caps": "Щ",
            "capsUp": "Щ"
        }
    },
    "KeyP": {
        "en": {
            "caseDown": "p",
            "caseUp": "P",
            "caps": "P",
            "capsUp": "P"
        },
        "ru": {
            "caseDown": "з",
            "caseUp": "З",
            "caps": "З",
            "capsUp": "3"
        }
    },
    "BracketLeft": {
        "en": {
            "caseDown": "[",
            "caseUp": "{",
            "caps": "[",
            "capsUp": "["
        },
        "ru": {
            "caseDown": "х",
            "caseUp": "Х",
            "caps": "Х",
            "capsUp": "X"
        }
    },
    "BracketRight": {
        "en": {
            "caseDown": "]",
            "caseUp": "}",
            "caps": "]",
            "capsUp": "]"
        },
        "ru": {
            "caseDown": "ъ",
            "caseUp": "Ъ",
            "caps": "Ъ",
            "capsUp": "Ъ"
        }
    },
    "Backslash": {
        "en": {
            "caseDown": "\\",
            "caseUp": "|",
            "caps": "\\",
            "capsUp": "|"
        },
        "ru": {
            "caseDown": "\\",
            "caseUp": "/",
            "caps": "\\",
            "capsUp": "/"
        }
    },
    "Delete": {
        "en": {
            "caseDown": "Del",
            "caseUp": "Del",
            "caps": "Del",
            "capsUp": "Del"
        },
        "ru": {
            "caseDown": "Del",
            "caseUp": "Del",
            "caps": "Del",
            "capsUp": "Del"
        }
    },
    "CapsLock": {
        "en": {
            "caseDown": "CapsLk",
            "caseUp": "CapsLk",
            "caps": "CapsLk",
            "capsUp": "CapsLk"
        },
        "ru": {
            "caseDown": "CapsLk",
            "caseUp": "CapsLk",
            "caps": "CapsLk",
            "capsUp": "CapsLk"
        }
    },
    "KeyA": {
        "en": {
            "caseDown": "a",
            "caseUp": "A",
            "caps": "A",
            "capsUp": "A"
        },
        "ru": {
            "caseDown": "ф",
            "caseUp": "Ф",
            "caps": "Ф",
            "capsUp": "Ф"
        }
    },
    "KeyS": {
        "en": {
            "caseDown": "s",
            "caseUp": "S",
            "caps": "S",
            "capsUp": "S"
        },
        "ru": {
            "caseDown": "ы",
            "caseUp": "Ы",
            "caps": "Ы",
            "capsUp": "Ы"
        }
    },
    "KeyD": {
        "en": {
            "caseDown": "d",
            "caseUp": "D",
            "caps": "D",
            "capsUp": "D"
        },
        "ru": {
            "caseDown": "в",
            "caseUp": "В",
            "caps": "В",
            "capsUp": "B"
        }
    },
    "KeyF": {
        "en": {
            "caseDown": "f",
            "caseUp": "F",
            "caps": "F",
            "capsUp": "F"
        },
        "ru": {
            "caseDown": "а",
            "caseUp": "А",
            "caps": "А",
            "capsUp": "A"
        }
    },
    "KeyG": {
        "en": {
            "caseDown": "g",
            "caseUp": "G",
            "caps": "G",
            "capsUp": "G"
        },
        "ru": {
            "caseDown": "п",
            "caseUp": "П",
            "caps": "П",
            "capsUp": "П"
        }
    },
    "KeyH": {
        "en": {
            "caseDown": "h",
            "caseUp": "H",
            "caps": "H",
            "capsUp": "H"
        },
        "ru": {
            "caseDown": "р",
            "caseUp": "Р",
            "caps": "Р",
            "capsUp": "P"
        }
    },
    "KeyJ": {
        "en": {
            "caseDown": "j",
            "caseUp": "J",
            "caps": "J",
            "capsUp": "J"
        },
        "ru": {
            "caseDown": "о",
            "caseUp": "О",
            "caps": "О",
            "capsUp": "O"
        }
    },
    "KeyK": {
        "en": {
            "caseDown": "k",
            "caseUp": "K",
            "caps": "K",
            "capsUp": "K"
        },
        "ru": {
            "caseDown": "л",
            "caseUp": "Л",
            "caps": "Л",
            "capsUp": "Л"
        }
    },
    "KeyL": {
        "en": {
            "caseDown": "l",
            "caseUp": "L",
            "caps": "L",
            "capsUp": "L"
        },
        "ru": {
            "caseDown": "д",
            "caseUp": "Д",
            "caps": "Д",
            "capsUp": "Д"
        }
    },
    "Semicolon": {
        "en": {
            "caseDown": ";",
            "caseUp": ":",
            "caps": ";",
            "capsUp": ":"
        },
        "ru": {
            "caseDown": "ж",
            "caseUp": "Ж",
            "caps": "Ж",
            "capsUp": "Ж"
        }
    },
    "Quote": {
        "en": {
            "caseDown": "'",
            "caseUp": "\"",
            "caps": "'",
            "capsUp": "'"
        },
        "ru": {
            "caseDown": "э",
            "caseUp": "Э",
            "caps": "Э",
            "capsUp": "Э"
        }
    },
    "Enter": {
        "en": {
            "caseDown": "Enter",
            "caseUp": "Enter",
            "caps": "Enter",
            "capsUp": "Enter"
        },
        "ru": {
            "caseDown": "Enter",
            "caseUp": "Enter",
            "caps": "Enter",
            "capsUp": "Enter"
        }
    },
    "ShiftLeft": {
        "en": {
            "caseDown": "Shift",
            "caseUp": "Shift",
            "caps": "Shift",
            "capsUp": "Shift"
        },
        "ru": {
            "caseDown": "Shift",
            "caseUp": "Shift",
            "caps": "Shift",
            "capsUp": "Shift"
        }
    },
    "KeyZ": {
        "en": {
            "caseDown": "z",
            "caseUp": "Z",
            "caps": "Z",
            "capsUp": "Z"
        },
        "ru": {
            "caseDown": "я",
            "caseUp": "Я",
            "caps": "Я",
            "capsUp": "Я"
        }
    },
    "KeyX": {
        "en": {
            "caseDown": "x",
            "caseUp": "X",
            "caps": "X",
            "capsUp": "X"
        },
        "ru": {
            "caseDown": "ч",
            "caseUp": "Ч",
            "caps": "Ч",
            "capsUp": "Ч"
        }
    },
    "KeyC": {
        "en": {
            "caseDown": "c",
            "caseUp": "C",
            "caps": "C",
            "capsUp": "C"
        },
        "ru": {
            "caseDown": "с",
            "caseUp": "С",
            "caps": "С",
            "capsUp": "C"
        }
    },
    "KeyV": {
        "en": {
            "caseDown": "v",
            "caseUp": "V",
            "caps": "V",
            "capsUp": "V"
        },
        "ru": {
            "caseDown": "м",
            "caseUp": "М",
            "caps": "М",
            "capsUp": "M"
        }
    },
    "KeyB": {
        "en": {
            "caseDown": "b",
            "caseUp": "B",
            "caps": "B",
            "capsUp": "B"
        },
        "ru": {
            "caseDown": "и",
            "caseUp": "И",
            "caps": "И",
            "capsUp": "И"
        }
    },
    "KeyN": {
        "en": {
            "caseDown": "n",
            "caseUp": "N",
            "caps": "N",
            "capsUp": "N"
        },
        "ru": {
            "caseDown": "т",
            "caseUp": "Т",
            "caps": "Т",
            "capsUp": "T"
        }
    },
    "KeyM": {
        "en": {
            "caseDown": "m",
            "caseUp": "M",
            "caps": "M",
            "capsUp": "M"
        },
        "ru": {
            "caseDown": "ь",
            "caseUp": "Ь",
            "caps": "Ь",
            "capsUp": "b"
        }
    },
    "Comma": {
        "en": {
            "caseDown": ",",
            "caseUp": "<",
            "caps": ",",
            "capsUp": "<"
        },
        "ru": {
            "caseDown": "б",
            "caseUp": "Б",
            "caps": "Б",
            "capsUp": "Б"
        }
    },
    "Period": {
        "en": {
            "caseDown": ".",
            "caseUp": ">",
            "caps": ".",
            "capsUp": ">"
        },
        "ru": {
            "caseDown": "ю",
            "caseUp": "Ю",
            "caps": "Ю",
            "capsUp": "Ю"
        }
    },
    "Slash": {
        "en": {
            "caseDown": "/",
            "caseUp": "?",
            "caps": "/",
            "capsUp": "?"
        },
        "ru": {
            "caseDown": ".",
            "caseUp": ",",
            "caps": ".",
            "capsUp": ","
        }
    },
    "ArrowUp": {
        "en": {
            "caseDown": "^",
            "caseUp": "^",
            "caps": "^",
            "capsUp": "^"
        },
        "ru": {
            "caseDown": "^",
            "caseUp": "^",
            "caps": "^",
            "capsUp": "^"
        }
    },
    "ShiftRight": {
        "en": {
            "caseDown": "Shift",
            "caseUp": "Shift",
            "caps": "Shift",
            "capsUp": "Shift"
        },
        "ru": {
            "caseDown": "Shift",
            "caseUp": "Shift",
            "caps": "Shift",
            "capsUp": "Shift"
        }
    },
    "ControlLeft": {
        "en": {
            "caseDown": "Ctrl",
            "caseUp": "Ctrl",
            "caps": "Ctrl",
            "capsUp": "Ctrl"
        },
        "ru": {
            "caseDown": "Ctrl",
            "caseUp": "Ctrl",
            "caps": "Ctrl",
            "capsUp": "Ctrl"
        }
    },
    "MetaLeft": {
        "en": {
            "caseDown": "Win",
            "caseUp": "Win",
            "caps": "Win",
            "capsUp": "Win"
        },
        "ru": {
            "caseDown": "Win",
            "caseUp": "Win",
            "caps": "Win",
            "capsUp": "Win"
        }
    },
    "AltLeft": {
        "en": {
            "caseDown": "Alt",
            "caseUp": "Alt",
            "caps": "Alt",
            "capsUp": "Alt"
        },
        "ru": {
            "caseDown": "Alt",
            "caseUp": "Alt",
            "caps": "Alt",
            "capsUp": "Alt"
        }
    },
    "Space": {
        "en": {
            "caseDown": "",
            "caseUp": "",
            "caps": "",
            "capsUp": ""
        },
        "ru": {
            "caseDown": "",
            "caseUp": "",
            "caps": "",
            "capsUp": ""
        }
    },
    "AltRight": {
        "en": {
            "caseDown": "Alt",
            "caseUp": "Alt",
            "caps": "Alt",
            "capsUp": "Alt"
        },
        "ru": {
            "caseDown": "Alt",
            "caseUp": "Alt",
            "caps": "Alt",
            "capsUp": "Alt"
        }
    },
    "ArrowLeft": {
        "en": {
            "caseDown": "<",
            "caseUp": "<",
            "caps": "<",
            "capsUp": "<"
        },
        "ru": {
            "caseDown": "<",
            "caseUp": "<",
            "caps": "<",
            "capsUp": "<"
        }
    },
    "ArrowDown": {
        "en": {
            "caseDown": "\\/",
            "caseUp": "\\/",
            "caps": "\\/",
            "capsUp": "\\/"
        },
        "ru": {
            "caseDown": "\\/",
            "caseUp": "\\/",
            "caps": "\\/",
            "capsUp": "\\/"
        }
    },
    "ArrowRight": {
        "en": {
            "caseDown": ">",
            "caseUp": ">",
            "caps": ">",
            "capsUp": ">"
        },
        "ru": {
            "caseDown": ">",
            "caseUp": ">",
            "caps": ">",
            "capsUp": ">"
        }
    },
    "ControlRight": {
        "en": {
            "caseDown": "Ctrl",
            "caseUp": "Ctrl",
            "caps": "Ctrl",
            "capsUp": "Ctrl"
        },
        "ru": {
            "caseDown": "Ctrl",
            "caseUp": "Ctrl",
            "caps": "Ctrl",
            "capsUp": "Ctrl"
        }
    }
};
const keyboardParam = {
    shift: false,
    capsLock: false,
    language: localStorage.getItem('language') ? localStorage.getItem('language') : 'ENG',
    selectMouse: null,
    cursorPosition: null,
    letterInString: null,
    indexInString: null,
    currentPositionInString: null,
};

export {
    KlavaClass,
    KlavaKey,
    KlavaPar,
    keyboardParam
};