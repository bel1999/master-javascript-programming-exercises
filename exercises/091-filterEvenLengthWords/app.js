function filterEvenLengthWords(words) {
    return words.filter(item => item.length % 2 === 0);
    
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']
