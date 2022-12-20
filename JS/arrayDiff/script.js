const arrayDiff = (a, b) => a.filter(el => !b.includes(el))

console.log(arrayDiff([3, 3], [3]))