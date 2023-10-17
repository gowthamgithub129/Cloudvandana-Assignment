function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word =>
        {
            return word.split('').reverse().join('');
        });

    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
const input = "This is a sunny day";
const output = reverseWords(input);
console.log(output);