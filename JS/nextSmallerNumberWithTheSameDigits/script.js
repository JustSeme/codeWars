//Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');

function nextSmaller(n) {
    let min = minify(n)
    while (--n >= min) if (minify(n) === min) return n
    return -1
}

console.log(nextSmaller(414));