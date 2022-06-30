//getting a random dice number

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map((num) =>
        Math.round(Math.random() * 5) + 1);
};

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill(0).map((num) =>
        `<div class="placeholder-dice"></div>`
    ).join('');
};

const getPercentage = (remainingHealth, maximumHealth) =>
    ((100 * remainingHealth) / maximumHealth);




export { getDiceRollArray, getDicePlaceholderHtml, getPercentage };