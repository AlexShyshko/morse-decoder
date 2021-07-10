const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let splittedArr = [];
    let slicedStr = '';
    let i = 0;

    for (i = 0; i < expr.length; i = i + 10) {
        slicedStr = expr.slice(i, i + 10);
        splittedArr.push(slicedStr);
    }

    let slicedArr = [];
    slicedArr = splittedArr.map(function(str) {
        if (str === '**********') {
            return slicedStr = ' ';
        }
        slicedStr = str;
        i = 0;
        while (str[i] === '0') {
            slicedStr = str.slice(i + 2);
            i = i + 2;
        }
        return slicedStr;
    })

    let convertedArr = slicedArr.map(function(str) {
        let convertedStr = '';
        if (str === ' ') {
            return str;
        }
        i = 0;
        while (i < str.length) {
            if (str[i + 1] === '0') {
                convertedStr = convertedStr + '.';
            } else {
                convertedStr = convertedStr + '-';
            }
            i = i + 2;
        }
        return convertedStr;
    })

    let decodedArr = [];
    for (i = 0; i < convertedArr.length; i ++) {
        if (convertedArr[i] === ' ') {
            decodedArr.push(' ');
        }
        for (let key in MORSE_TABLE) {
            let comparedKey = key;
            if (comparedKey === convertedArr[i]) {
                decodedArr.push(MORSE_TABLE[comparedKey]);
            }
        }
    }
    return decodedArr.join('');
}

module.exports = {
    decode
}