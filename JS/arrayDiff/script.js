function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length + 1; j++) {
            const indexOfA = b.length === 1 ? a.indexOf(b[0]) : a.indexOf(b[j])
            if (indexOfA !== -1) {
                a.splice(indexOfA, 1)
            }
        }
    }
    return a
}

console.log(arrayDiff([3, 3], [3]))