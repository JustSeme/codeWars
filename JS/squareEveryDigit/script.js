const squareDigits = (num) => +num.toString().split('').map((el) => Math.pow(+el, 2)).join('')

console.log(squareDigits(3212));