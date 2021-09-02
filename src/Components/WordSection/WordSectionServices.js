const randomizeSentence = sentence =>  {
    const randomSentence = [];
    sentence.split(' ').forEach(word => {
        if (word.length <= 2) {
            randomSentence.push(word.toLowerCase());
        } else {
            const letters = word.split('');
            const newWord = letters.sort(() => Math.random() - 0.5);
            randomSentence.push(newWord.join('').toLowerCase());
        }
    })

    return randomSentence.join(' ');
}
export default randomizeSentence;