const sumDigits = num => {
    Math.abs(num)
        .toString()
        .split('')
        .reduce((sum, curr) => +sum + +curr, 0)
}