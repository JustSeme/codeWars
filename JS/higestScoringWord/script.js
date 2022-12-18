/* Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
    const words = x.split(' ')
    const generalScore = []
    words.forEach((el) => {
        const scoreOfWord = el.split('').map((char) => char.charCodeAt(0) - 96).reduce((accum, current) => accum + current)
        generalScore.push(scoreOfWord)
    })
    const indexOfHighestNum = generalScore.indexOf(Math.max(...generalScore))
    return words[indexOfHighestNum]
}

console.log(high('what time are we climbing up the volcano'));