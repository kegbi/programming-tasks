// let morseCode = MORSE_CODE['.--'];
const alphabet = {
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-·-·--":"!",
    "·-·-·-":".",
    "--··--":","
}
// decodeMorse = function(string){
//     [...string].forEach(element => {
        
//     });
// }

let message = '.... . -.--   .--- ..- -.. .';

// const messagesArray = messages.map();
// let characters = messages.split(' ');
// function decodeMorse() {
//     let characters = [];
//     let messages = message.split('   ');
//     messages.forEach(element => {
//         characters.push(element.split(' '));
//         characters.forEach(element => {
//             element.forEach(i => {
//                 result.push(alphabet[i]);
//             })
//         })
//     });
//     console.log(characters);
//     console.log(messages);
//     result = result.toString()
//     result = result.replace(/,/g, '');
//     console.log(result);
//     characters.forEach(element => {
//         element.forEach(i => {
//             result.push(alphabet[i]);
//         })
//     })
// }
// let messages = message.split('   ');
// let characters = [];
// messages.forEach(element => {
//     characters.push(element.split(' '));
//     console.log(characters)
// });
// for(var i in characters) {
//     if (result.toString.length = 0) {
//         for(var j in i) {
//             result.push(alphabet[i]);
//         }
//     } else {
//         for(var j in i) {
//             result.push(' ');
//             result.push(alphabet[i]);
//         }
//     }
// }

let messages = message.split('   ');
let res = '';
for (let i in messages) {
    let messagesArray = messages[i].split(' ');
    for (var j in messagesArray) {
        if(alphabet[messagesArray[j]] !== undefined) {
            res += alphabet[messagesArray[j]];
        }
    }
    res += ' '
}
res = res.trim();
console.log(res);

// message.split("   ").map(function (word) {
//     word.split(" ").map(function (letter) {
//         result.push(alphabet[letter]);
//     });
//     result.push(" ");
// });
 
// console.log(result.join(""));


// console.log(messages);
// console.log(characters);
// console.log(result);
// result = result.toString().replace(/,/g, '');
// console.log(result);
// decodeMorse(morseCode);
// decodeMorse(message);