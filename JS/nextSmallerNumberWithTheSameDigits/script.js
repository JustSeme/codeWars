//Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

let myFunc = num => Number(num);

const isTheSameDigits = (comparedNumber, number) => {
    let stack = []
    for (let i = 0; i < number.length; i++) {
        const indexOfCompared = comparedNumber.indexOf(number[i])
        if (indexOfCompared === -1) {
            return false
        } else {
            comparedNumber.splice(indexOfCompared, 1)
        }
    }
    return true
}

function nextSmaller(n) {
    for (let i = n - 1; i > -2; i--) {
        let comparedNumber = Array.from(String(i), myFunc);
        let number = Array.from(String(n), myFunc);
        if (isTheSameDigits(comparedNumber, number))
            return i
        if (i < 0) return -1
    }
}

console.log(nextSmaller(414));