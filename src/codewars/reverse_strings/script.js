function spinWords(str) {
    let reverseWords = '';
    const words = str.split(' ');
    words.forEach(element => {
        if(element.length >=5) {
            let processedWords = element.split('').reverse().join('');
            if(reverseWords.length == 0) {
                reverseWords = reverseWords + processedWords;
            } else {
                reverseWords = reverseWords + ' ' + processedWords;
            }
        } else {
            if(reverseWords.length == 0) {
                reverseWords = reverseWords + element;
            } else {
                reverseWords = reverseWords + ' ' + element;
            }
        }
    });
    return(reverseWords)
}