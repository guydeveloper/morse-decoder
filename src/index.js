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
    const wordDivider = '**********';

    const dict = {
        '00': '',
        '10': '.',
        '11': '-'
    };

    const words = expr.split(wordDivider);
    const chars = [];
    const morseChars = [];

    for (let i = 0; i < words.length; i += 1) {
        const currentWord = words[i];
        const currentChar = [];
        for (let j = 1; j <= currentWord.length / 10; j += 1) {
            let char = currentWord.substring(
                currentWord.length - (10 * j),
                currentWord.length - (10 * j) + 10);
            if (char.length === 10) {
                currentChar.push(char);
            } else {
                char = char.padStart(10, '0');
                currentChar.push(char);
            }
        }
        chars.push(currentChar);
    }

    for (let i = 0; i < chars.length; i += 1) {
        const currentWord = chars[i];
        const currentMorseWord = [];

        for (let j = 0; j < currentWord.length; j += 1) {
            const currentChar = currentWord[j];
            const morseChar = [];

            for (let k = 0; k < currentChar.length; k += 2) {
                const currentMorseChar = currentChar.substring(k, k + 2);
                morseChar.push(dict[currentMorseChar]);
            }

            currentMorseWord.push(morseChar.join(''));
        }
        morseChars.push(currentMorseWord);
    }

    const decode = morseChars.map((char) => {
        return char
            .map((item) => MORSE_TABLE[item])
            .reverse()
            .join('');
    }).join(' ');

    return decode;
}

module.exports = {
    decode
}