function solution(string) {
    const charIsUpper = (char) => {
        if (char === char.toUpperCase()) return true
        else return false
    }

    const arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        debugger
        if (charIsUpper(arr[i])) {
            arr.splice(i, 0, ' ')
            i++
        }
    }
    return arr.join('')
}

console.log(solution('newEyeManGo'));
