function validParentheses(parens) {
    if (!parens) return true
    const chars = parens.split('')
    const stack = []
    const open = ['(', '{', '[']
    const close = [')', '}', ']']
    let closeIndex
    let openIndex
    for (let i = 0; i < chars.length; i++) {
        openIndex = open.indexOf(chars[i])
        if (openIndex !== -1) {
            stack.push('open')
            continue
        }

        closeIndex = close.indexOf(chars[i])
        if (closeIndex !== -1) {
            if (stack.indexOf('open') !== -1) {
                stack.splice(stack.indexOf('open'), 1)
            } else {
                stack.push('close')
            }
        }
    }

    if (stack.length !== 0) {
        return false
    }
    return true
}

console.log(validParentheses(')'));
