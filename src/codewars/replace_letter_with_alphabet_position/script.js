// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'x', 'y', 'z'];
let str = "The sunset sets at twelve o' clock.";
// sorted.sort();
// console.log(sorted);

// let sorted = [ 'a', 'b', 'c', 'd', 'e',
//   'f', 'g', 'h', 'i', 'k',
//   'l', 'm', 'n', 'o', 'p',
//   'q', 'r', 's', 't', 'v',
//   'x', 'y', 'z'];
// for (var i = 0; i < str.length; i++) {
//     sorted.push(str[i].toLowerCase());
// }

// let lower = str.toLowerCase();

// lower.forEach(elem => {
//     console.log()
// })

function alphabetPosition(text) {
    let str = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97);;
    let array = str.split('');
    let lower = text.toLowerCase();
    let res = '';
    [...lower].forEach(elem => {
        for (let i = 0; i < array.length; i++) {
            let neededNumb = 0;
            if(elem == array[i]) {
                neededNumb = i+1;
                if(res.length == 0) {
                    res = res + neededNumb;
                } else {
                    res = res + ' ' + neededNumb;
                }
            }
        }
    });
    return res;
}

alphabetPosition(str);
// console.log(array[18]);
// let res = '';

// [...lower].forEach(elem => {
//     for (let i = 0; i < array.length; i++) {
//         let neededNumb = 0;
//         if(elem == array[i]) {
//             neededNumb = i++;
//             if(res.length == 0) {
//                 res = res + neededNumb;
//             } else {
//                 res = res + ' ' + neededNumb;
//             }
//         }
//     }
// });

// console.log(res);

// lower.forEach(element => {
//     let res = '';
//     if (lower[element] == array[0])
// });

// console.log(lower)