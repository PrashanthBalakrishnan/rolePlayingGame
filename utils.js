//getting a random dice number
function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function (num) {
        return (Math.round(Math.random() * 5) + 1);
    })
}

export { getDiceRollArray }